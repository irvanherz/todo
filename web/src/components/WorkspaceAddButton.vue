<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { graphql } from '@/gql'
import { toTypedSchema } from '@vee-validate/zod'
import { useMutation } from '@vue/apollo-composable'
import { createReusableTemplate, useMediaQuery } from '@vueuse/core'
import { SubmissionHandler, useForm } from 'vee-validate'
import { ref } from 'vue'
import WorkspaceForm from './WorkspaceForm.vue'
import { WorkspaceFormSchema } from './lib/WorkspaceFormSchema'
import { toast } from './ui/toast'

// Reuse `form` section
const [UseTemplate, GridForm] = createReusableTemplate()

const emit = defineEmits({
  created(_payload: object) {
    return true
  }
})

const form = useForm({
  validationSchema: toTypedSchema(WorkspaceFormSchema)
});

const createWorkspaceMutationDocument = graphql(/* GraphQL */ `
  mutation CreateWorkspace($data: CreateWorkspaceInput!) {
    createWorkspace(data: $data) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`)
const create = useMutation(createWorkspaceMutationDocument)

const handleSubmitOk: SubmissionHandler = async (values) => {
  try {
    const result = await create.mutate({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: values as any
    })
    const data = result.data.createWorkspace
    toast({
      title: 'Workspace Created',
      description: `Workspace "${data.name}" has been created.`,
    });
    form.resetForm()
    isOpen.value = false
    emit('created', data)
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

const isOpen = ref(false)
const isDesktop = useMediaQuery('(min-width: 768px)')
</script>

<template>
  <UseTemplate>
    <div class="grid gap-4">
      <WorkspaceForm :form="form" @submit="handleSubmit" />
      <Button type="submit" @click="handleSubmit">
        Save changes
      </Button>
    </div>
  </UseTemplate>

  <Dialog v-if="isDesktop" v-model:open="isOpen">
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add Workspace</DialogTitle>
        <DialogDescription>
          Fill in the form below to create a new workspace.
        </DialogDescription>
      </DialogHeader>
      <GridForm />
    </DialogContent>
  </Dialog>

  <Drawer v-else v-model:open="isOpen">
    <DrawerTrigger as-child>
      <slot />
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader class="text-left">
        <DrawerTitle>Add Workspace</DrawerTitle>
        <DrawerDescription>
          Fill in the form below to create a new workspace.
        </DrawerDescription>
      </DrawerHeader>
      <div class="px-4">
        <GridForm />
      </div>
      <DrawerFooter class="pt-2">
        <DrawerClose as-child>
          <Button variant="outline">
            Cancel
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>