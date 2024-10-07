<script setup lang="ts">
import { cn } from '@/lib/utils';
import dayjs from 'dayjs';
import { CalendarIcon } from 'lucide-vue-next';
import { Button } from './ui/button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { Calendar } from './ui/v-calendar';
</script>

<template>
  <form v-bind="$attrs" class="grid gap-4">
    <FormField name="title" v-slot="{ componentField }">
      <FormItem>
        <FormLabel>Task title</FormLabel>
        <FormControl>
          <Input placeholder="Learn new skill" v-bind="componentField" />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField name="description" v-slot="{ componentField }">
      <FormItem>
        <FormLabel>Task description</FormLabel>
        <FormControl>
          <Input placeholder="Vue, React, Tailwind, Shadcn..." v-bind="componentField" />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField name="dueAt" v-slot="{ componentField, value }">
      <FormItem>
        <FormLabel>Task due</FormLabel>
        <FormControl>
          <Popover>
            <PopoverTrigger as-child>
              <Button
                :variant="'outline'"
                :class="cn('w-full flex justify-start text-left font-normal',!value && 'text-muted-foreground')"
              >
                <CalendarIcon class="mr-2 h-4 w-4" />
                <span>{{ componentField.modelValue ? dayjs(componentField.modelValue).format('YYYY-MM-DD HH:mm') : "Pick a date" }}</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar v-model="componentField.modelValue" mode="datetime" />
            </PopoverContent>
          </Popover>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField name="priority" v-slot="{ componentField }">
      <FormItem>
        <FormLabel>Task priority</FormLabel>
        <FormControl>
          <ToggleGroup type="single" v-bind="componentField">
            <ToggleGroupItem value="LOW">
              Low
            </ToggleGroupItem>
            <ToggleGroupItem value="NORMAL">
              Normal
            </ToggleGroupItem>
            <ToggleGroupItem value="HIGH">
              High
            </ToggleGroupItem>
            <ToggleGroupItem value="URGENT">
              Urgent
            </ToggleGroupItem>
          </ToggleGroup>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField name="status" v-slot="{ componentField }">
      <FormItem>
        <FormLabel>Task status</FormLabel>
        <FormControl>
          <ToggleGroup type="single" v-bind="componentField">
            <ToggleGroupItem value="OPEN">
              Open
            </ToggleGroupItem>
            <ToggleGroupItem value="IN_PROGRESS">
              In progress
            </ToggleGroupItem>
            <ToggleGroupItem value="COMPLETED">
              Completed
            </ToggleGroupItem>
          </ToggleGroup>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>
  </form>
</template>