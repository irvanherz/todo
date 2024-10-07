<script setup lang="ts">
import AuthRegisterForm from '@/components/AuthRegisterForm.vue';
import LayoutAuth from '@/components/LayoutAuth.vue';
import { AuthRegisterFormSchema } from '@/components/lib/AuthRegisterFormSchema';
import Button from '@/components/ui/button/Button.vue';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/toast';
import { useAuthStore } from '@/stores/auth';
import { toTypedSchema } from '@vee-validate/zod';
import { useMutation } from '@vue/apollo-composable';
import { SubmissionHandler, useForm } from 'vee-validate';
import { useRoute, useRouter } from 'vue-router';
import { graphql } from '../gql';

const route = useRoute()
const router = useRouter()

const form = useForm({
  validationSchema: toTypedSchema(AuthRegisterFormSchema)
});

const registerMutationDocument = graphql(/* GraphQL */ `
  mutation RegisterUser($data: AuthRegisterInput!) {
    registerUser(data: $data) {
      user {
        id
        username
        email
        firstName
        lastName
        password
        createdAt
        updatedAt
      }
      accessToken
      refreshToken
    }
  }
`)
const register = useMutation(registerMutationDocument)
const auth = useAuthStore();

const handleSubmitOk: SubmissionHandler = async (values) => {
  try {
    const result = await register.mutate({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: values as any
    })
    const data = result.data.registerUser
    auth.$patch({
      status: 'authenticated',
      user: data.user,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    })    
    const nextUrl = route.query.redir
    router.push(typeof(nextUrl) === 'string' ? nextUrl : '/') 
  } catch (error) {
    toast({
      title: 'Register Error',
      description: error.message,
    });
  }
};

const handleSubmitError = () => {
  toast({
    title: 'Validation Error',
    description: 'Please check your form and try again.',
  });
}

const handleSubmit = form.handleSubmit(handleSubmitOk, handleSubmitError)
</script>

<template>
  <LayoutAuth>
    <Card class="mx-auto w-full max-w-[500px]">
      <CardHeader>
        <CardTitle class="text-xl">
          Sign Up
        </CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <AuthRegisterForm :form="form" @submit="handleSubmit" />
        <Button @click="handleSubmit">
          Register
        </Button>
        <div class="text-center text-sm">
          Already have an account?
          <RouterLink :replace="true" to="/auth/login" class="underline">
            Sign in
          </RouterLink>
        </div>
      </CardContent>
    </Card>
  </LayoutAuth>
</template>