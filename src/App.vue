<script setup lang="ts">
import { SidebarProvider } from './components/ui/sidebar';
import LayoutBase from './layout/LayoutBase.vue';

</script>

<template>
  <SidebarProvider :default-open="false">
    <LayoutBase />
  </SidebarProvider>
</template>
