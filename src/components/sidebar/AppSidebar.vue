<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar'
import Header from '../header/Header.vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { computed, ref, watch, watchEffect } from 'vue';
import moment from '@/lib/moment';
import { Button } from '../ui/button';
import { LogOut } from 'lucide-vue-next';
import { key_accesstoken } from '@/constants/localstorage.keys';

const { getRoutes, push } = useRouter();
const { isMobile, toggleSidebar } = useSidebar(); 

const route = useRoute();
const routes = getRoutes();

const routesMapped = computed(() => {
  return routes.map(item => {
    return {
      ...item,
      isActive: item.path === route.path
    }
  })
    .filter(route => route.meta.showInMenu != false)
})

const now = ref(new Date());
const hour = now.value.getHours();

watchEffect((onCleanup) => {
  const timer = setInterval(() => {
    now.value = new Date()
  }, 1000)

  onCleanup(() => clearInterval(timer))
})

const currentDateFormated = computed(() => {
  return moment(now.value)
    .locale('pt-br')
    .format('dddd, DD MMMM, HH:mm:ss')
});

const greetings = computed(() => {
  if (hour >= 0 && hour <= 5) {
    return "Hora de dormir"
  } else if (hour > 5 && hour <= 12) {
    return "Bom dia";
  } else if (hour > 12 && hour < 18) {
    return "Boa tarde"
  } else {
    return "Boa noite"
  }
});

const logout = () => {
  localStorage.removeItem(key_accesstoken);
  push('/');
}

const handleClickRouter = () => {
  if (!!isMobile.value) {
    toggleSidebar();
  }
}

</script>

<template>
  <SidebarProvider>
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-bold text-xl">{{ greetings }}</span>
                <span class="truncate text-sm">{{ currentDateFormated }}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup >
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem v-for="item in routesMapped" :key="item.path" class="">
                <SidebarMenuButton @click="handleClickRouter" as-child :style="item.isActive ? 'font-weight: bold' : ''">
                  <RouterLink :to="item.path" >
                    <component :is="item.meta.icon" />
                    <span>{{ item.meta.title }}</span>
                  </RouterLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <Button @click="logout" variant="ghost">
                <component :is="LogOut" /> Sair do sistema
              </Button>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
    <SidebarInset>
      <Header />
      <div class="flex flex-1 flex-col gap-4 p-7">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
