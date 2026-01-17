<script setup lang="ts">
import AppSidebar from '@/components/sidebar/AppSidebar.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
</script>

<template>
    <AppSidebar>
        <router-view />
    </AppSidebar>
</template>