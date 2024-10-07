<script lang="ts" setup>
import { Input } from '@/components/ui/input';
import { FormField } from './ui/form';
import FormControl from './ui/form/FormControl.vue';
import FormDescription from './ui/form/FormDescription.vue';
import FormItem from './ui/form/FormItem.vue';
import FormLabel from './ui/form/FormLabel.vue';
import FormMessage from './ui/form/FormMessage.vue';
import { Textarea } from './ui/textarea';
</script>

<template>
  <form v-bind="$attrs" class="grid gap-4">
    <FormField name="name" v-slot="{ componentField }">
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input placeholder="Workspace name" v-bind="componentField" />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField name="description" v-slot="{ componentField }">
      <FormItem>
        <FormLabel>Short Description</FormLabel>
        <FormControl>
          <Textarea placeholder="Write something about this workspace" v-bind="componentField" />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>
  </form>
</template>