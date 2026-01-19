<script setup lang="ts">
import { useRoute } from 'vue-router';
import { SidebarProvider } from './components/ui/sidebar';
import LayoutBase from './layout/LayoutBase.vue';
import { computed } from 'vue';
const route = useRoute();

const isShowLayout = computed(() => route.name !== 'login');

</script>

<template>
  <SidebarProvider :default-open="false" v-if="isShowLayout">
    <LayoutBase />
  </SidebarProvider>
  <router-view v-else/>
</template>
