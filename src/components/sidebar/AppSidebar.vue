<script setup lang="ts">
import {
  Sidebar,
  SidebarFooter,
  SidebarRail
} from '@/components/ui/sidebar'
import SidebarHeader from './SidebarHeader.vue';
import SidebarContent from './SidebarContent.vue';
</script>

<template>
  <Sidebar class="bg-white">
    <SidebarHeader />
    <SidebarContent />
    <SidebarFooter />
    <SidebarRail />
  </Sidebar>
</template>
