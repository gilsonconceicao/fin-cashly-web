<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { SidebarMenuButton, useSidebar } from '../ui/sidebar';
import SidebarTrigger from '../ui/sidebar/SidebarTrigger.vue';
const { open } = useSidebar()

</script>

<template>
    <header
        class="p-3 w-full flex h-12 items-center content-center justify-between bg-sidebar-accent">
        <div class="flex items-center justify-center">
            <SidebarTrigger />
            <h1 class="scroll-m-20 text-center text-1xl font-bold tracking-tight text-balance">
                FinCashly
            </h1>
        </div>
        <div v-if="!open" class="flex gap-1 p-1 rounded-sm items-center cursor-pointer hover:bg-slate-300">
            <div class="flex aspect-square size-8 items-center justify-center rounded-lg ">
                <Avatar size="sm" class="size-8">
                    <AvatarImage src="https://github.com/gilsonconceicao.png" />
                    <AvatarFallback class="bg-slate-200 p-4">GC</AvatarFallback>
                </Avatar>
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight ml-2">
                <span class="truncate font-semibold">Gilson Conceição</span>
            </div>
        </div>
    </header>
</template>