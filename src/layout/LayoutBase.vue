<script setup lang="ts">
import Header from '@/components/header/Header.vue';
import AppSidebar from '@/components/sidebar/AppSidebar.vue';

</script>

<template>
    <AppSidebar>
        <router-view />
    </AppSidebar>
</template>