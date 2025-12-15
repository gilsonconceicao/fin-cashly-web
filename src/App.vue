<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const showInitialInfo = computed(() => route.fullPath == '/');

console.log('route.fullPath', route.fullPath)
</script>

<template>
  <div v-if="showInitialInfo">
    <h1>Hello World </h1>
    <nav>
      <router-link to="/about">Test router to about</router-link>
    </nav>
  </div>

  <router-view />
</template>

<style scoped></style>
