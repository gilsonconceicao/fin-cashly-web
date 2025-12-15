<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { useRouter } from 'vue-router';
const router = useRouter();
function goBack() {
    router.push('/');
}
</script>
<template>
    <h1 class="text-3xl font-bold">Tela de sobre</h1>
    <Button variant="outline" @click="goBack">Voltar para início</Button>
</template>