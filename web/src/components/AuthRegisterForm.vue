<script setup lang="ts">
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
</script>

<template>
  <form v-bind="$attrs" class="grid gap-4">
    <div class="grid grid-cols-2 gap-4">
      <FormField name="firstName" v-slot="{ componentField }">
        <FormItem>
          <FormLabel>First Name</FormLabel>
          <FormControl>
            <Input placeholder="Enter your first name" v-bind="componentField" />
          </FormControl>
          <FormDescription />
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField name="lastName" v-slot="{ componentField }">
        <FormItem>
          <FormLabel>Last Name</FormLabel>
          <FormControl>
            <Input placeholder="Enter your last name" v-bind="componentField" />
          </FormControl>
          <FormDescription />
          <FormMessage />
        </FormItem>
      </FormField>
    </div>
    <FormField name="email" v-slot="{ componentField }">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input placeholder="Enter your email" v-bind="componentField" />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField name="username" v-slot="{ componentField }">
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input placeholder="Enter your username" v-bind="componentField" />
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