<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Button } from './components/ui/button';

const router = useRouter();

const route = useRoute();
const showInitialInfo = computed(() => route.fullPath == '/');

function goAbout() {
  router.push('/about');
}
</script>

<template>
  <div v-if="showInitialInfo">
    <h1 class="text-3xl font-bold">Início</h1>
    <Button variant="outline" @click="goAbout">Ir para sobre</Button>
  </div>

  <router-view />
</template>
