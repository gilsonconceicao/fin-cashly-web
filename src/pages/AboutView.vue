<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ref, warn, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const counter = ref(0);

function goBack() {
    router.push('/');
}

function addCount() {
    counter.value++;
}


</script>
<template>
    <h1 class="text-3xl font-bold">Tela de sobre</h1>
    <h1 class="text-2xl">{{ counter }}</h1>

    <br>

    <Button variant="outline" @click="addCount">Adicionar mais 1</Button>
    <Button variant="outline" @click="goBack">Voltar para início</Button>
</template>