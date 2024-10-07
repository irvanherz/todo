<script setup lang="ts">
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
</script>

<template>
  <form v-bind="$attrs" class="grid gap-4">
    <FormField name="usernameOrEmail" v-slot="{ componentField }">
      <FormItem>
        <FormLabel>Username or Email</FormLabel>
        <FormControl>
          <Input placeholder="Enter your username or email" v-bind="componentField" />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField name="password" v-slot="{ componentField }">
      <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input placeholder="Enter your password" type="password" v-bind="componentField" />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>
  </form>
</template>