<script setup lang="ts">
import { useField } from 'vee-validate';
import { Input } from '@/components/ui/input';

const props = defineProps<{
    label: string
    name: string
    placeholder?: string
    required?: boolean
    type?: string
}>()

const { value, errorMessage, handleBlur } = useField<string>(props.name)
</script>

<template>
    <div :class="['grid w-full items-center gap-1']">

        <Label :for="props.name">
            {{ props.label }}
            <span v-if="props.required" class="text-destructive">*</span>
        </Label>

        <Input 
            :id="props.name" 
            :type="props.type ?? 'text'" 
            v-model="value" 
            class="outline-none"
            :placeholder="props.placeholder"
            :required="props.required" 
            @blur="handleBlur" 
            :class="[errorMessage ? 'border border-red-600': '']"/>

        <p v-if="errorMessage" class="text-[12px] text-destructive">
            {{ errorMessage }}
        </p>
    </div>
</template>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0px 1000px hsl(var(--input)) inset !important;
  -webkit-text-fill-color: hsl(var(--foreground)) !important;
  caret-color: hsl(var(--foreground));
}
</style>