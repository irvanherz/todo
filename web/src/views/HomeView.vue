<script setup lang="ts">
import LayoutStd from '@/components/LayoutStd.vue';
import Button from '@/components/ui/button/Button.vue';
import Card from '@/components/ui/card/Card.vue';
import CardContent from '@/components/ui/card/CardContent.vue';
import CardHeader from '@/components/ui/card/CardHeader.vue';
import CardTitle from '@/components/ui/card/CardTitle.vue';
import Input from '@/components/ui/input/Input.vue';
import { useAuthStore } from '@/stores/auth';
import { CheckCircle, Clock, Cloud, ListTodo, Smartphone, Users, Zap } from 'lucide-vue-next';
const features = [
  { id: 1, icon: ListTodo, title: "Smart Lists", description: "Organize tasks intelligently based on your preferences and habits." },
  { id: 2, icon: Zap, title: "Quick Add", description: "Add tasks in seconds with our intuitive interface and natural language processing." },
  { id: 3, icon: Cloud, title: "Sync Everywhere", description: "Access your tasks from any device, always stay up-to-date." },
  { id: 4, icon: Clock, title: "Time Tracking", description: "Monitor how long you spend on tasks to improve your productivity." },
  { id: 5, icon: Users, title: "Collaboration", description: "Share lists and tasks with team members for seamless teamwork." },
  { id: 6, icon: Smartphone, title: "Mobile App", description: "Stay organized on-the-go with our powerful mobile application." }
]
const auth = useAuthStore();

const handleClick = () => {
  console.log('clicked', auth.status)
  if(auth.status === 'authenticated') {
    auth.setAuth({ status: 'unauthenticated', accessToken: '', refreshToken: '', user: null })
  } else {
    auth.setAuth({ status: 'authenticated', accessToken: '', refreshToken: '', user: null })
  }
}
</script>

<template>
  <LayoutStd>
    <div class="flex-1">
      <section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div class="container px-4 md:px-6">
          <div class="flex flex-col items-center space-y-4 text-center">
            <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl" @click="handleClick">
              Simplify Your Day with TaskFlow
            </h1>
            <p class="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-2xl/relaxed">
              The minimalist todo app that helps you focus on what matters most. Organize, prioritize, and accomplish with ease.
            </p>
            <div class="space-x-4">
              <RouterLink to="/auth/register">
                <Button>Get Started</Button>
              </RouterLink>
              <RouterLink to="/docs">
                <Button variant="outline">
                  Learn More
                </Button>
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
      <section id="features" class="w-full py-12 md:py-24 lg:py-32 bg-primary-foreground">
        <div class="container px-4 md:px-6">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Features
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <template v-for="(feature) in features" :key="feature.id">
              <Card>
                <CardHeader>
                  <component :is="feature.icon" class="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>{{ feature.title }}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{{ feature.description }}</p>
                </CardContent>
              </Card>
            </template>
          </div>
        </div>
      </section>
      <section id="about" class="w-full py-12 md:py-24 lg:py-32">
        <div class="container px-4 md:px-6">
          <div class="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div class="flex flex-col justify-center space-y-4">
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About TaskFlow
              </h2>
              <p class="text-muted-foreground">
                TaskFlow was born from a simple idea: everyone deserves a clear mind and an organized life. We've created a tool that's powerful enough for complex projects, yet simple enough for your daily to-dos.
              </p>
              <ul class="space-y-2">
                <li class="flex items-center space-x-2">
                  <CheckCircle class="h-5 w-5 text-primary" />
                  <span>Intuitive and easy to use</span>
                </li>
                <li class="flex items-center space-x-2">
                  <CheckCircle class="h-5 w-5 text-primary" />
                  <span>Customizable to fit your workflow</span>
                </li>
                <li class="flex items-center space-x-2">
                  <CheckCircle class="h-5 w-5 text-primary" />
                  <span>Constantly evolving with user feedback</span>
                </li>
              </ul>
              <Button class="w-fit">
                Learn More About Us
              </Button>
            </div>
            <div class="flex items-center justify-center">
              <div class="grid grid-cols-2 gap-4">
                <div class="grid gap-4">
                  <div class="overflow-hidden rounded-lg bg-primary/10 aspect-square">
                    <img
                      alt="TaskFlow interface 1"
                      class="object-cover w-full h-full"
                      height="300"
                      src="https://placehold.co/600x400/eee/31343c"
                      width="300"
                    >
                  </div>
                  <div class="overflow-hidden rounded-lg bg-primary/10 aspect-square">
                    <img
                      alt="TaskFlow interface 2"
                      class="object-cover w-full h-full"
                      height="300"
                      src="https://placehold.co/600x400/eee/31343c"
                      width="300"
                    >
                  </div>
                </div>
                <div class="grid gap-4">
                  <div class="overflow-hidden rounded-lg bg-primary/10 aspect-square">
                    <img
                      alt="TaskFlow interface 3"
                      class="object-cover w-full h-full"
                      height="300"
                      src="https://placehold.co/600x400/eee/31343c"
                      width="300"
                    >
                  </div>
                  <div class="overflow-hidden rounded-lg bg-primary/10 aspect-square">
                    <img
                      alt="TaskFlow interface 4"
                      class="object-cover w-full h-full"
                      height="300"
                      src="https://placehold.co/600x400/eee/31343c"
                      width="300"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div class="container px-4 md:px-6">
          <div class="flex flex-col items-center space-y-4 text-center">
            <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Get Started?
            </h2>
            <p class="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of users who have transformed their productivity with TaskFlow.
            </p>
            <div class="w-full max-w-sm space-y-2">
              <form class="flex space-x-2">
                <Input
                  class="flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">
                  Sign Up
                </Button>
              </form>
              <p class="text-xs text-muted-foreground">
                By signing up, you agree to our <a class="underline underline-offset-2 hover:text-primary" href="#">Terms & Conditions</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </LayoutStd>
</template>