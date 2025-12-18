<script lang="ts" setup>
import { GalleryVerticalEnd, User, Wallet } from 'lucide-vue-next';
import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const currrentDate = new Date().toLocaleDateString('pt-BR').toString();

</script>
<template>
  <SidebarHeader>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg">
          <div
            class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Avatar>
              <AvatarImage src="https://github.com/gilsonconceicao.png" />
              <AvatarFallback>GC</AvatarFallback>
            </Avatar>
          </div>
          <div class="grid flex-1 text-left text-sm leading-tight ml-2">
            <span class="truncate font-semibold">Gilson Conceição</span>
            <span class="truncate text-xs">{{ currrentDate }}</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>
</template>