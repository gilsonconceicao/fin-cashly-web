<script setup lang="ts">
import Header from '@/components/header/Header.vue';
import AppSidebar from '@/components/sidebar/AppSidebar.vue';
import SidebarTrigger from '@/components/ui/sidebar/SidebarTrigger.vue';


</script>

<template>
    <AppSidebar />
     <Header />
    <router-view />
</template>