<script setup lang="ts">
import AuthLoginForm from '@/components/AuthLoginForm.vue';
import LayoutAuth from '@/components/LayoutAuth.vue';
import { AuthLoginFormSchema } from '@/components/lib/AuthLoginFormSchema';
import Button from '@/components/ui/button/Button.vue';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/toast';
import { useAuthStore } from '@/stores/auth';
import { toTypedSchema } from '@vee-validate/zod';
import { useMutation } from '@vue/apollo-composable';
import { SubmissionHandler, useForm } from 'vee-validate';
import { useRoute, useRouter } from 'vue-router';
import { graphql } from '../gql';

const form = useForm({
  validationSchema: toTypedSchema(AuthLoginFormSchema)
});

const loginMutationDocument = graphql(/* GraphQL */ `
  mutation login($data: AuthLoginInput!) {
    loginUser(data: $data) {
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
const route = useRoute()
const router = useRouter()
const login = useMutation(loginMutationDocument)
const auth = useAuthStore();

const handleSubmitOk: SubmissionHandler = async (values) => {
  try {
    const result = await login.mutate({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: values as any
    })
    const data = result.data.loginUser
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
      title: 'Login Error',
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
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl">
          Login
        </CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <AuthLoginForm :form="form" @submit="handleSubmit" />
        <Button @click="handleSubmit">
          Login
        </Button>
        <div class="text-center text-sm">
          Doesn't have an account?
          <RouterLink :replace="true" to="/auth/register" class="underline">
            Sign up
          </RouterLink>
        </div>
      </CardContent>
      <CardFooter />
    </Card>
  </LayoutAuth>
</template>