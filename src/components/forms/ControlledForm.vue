<script lang="ts" setup>
import { useForm } from 'vee-validate';

const props = defineProps<{
    schema: Object;
    initialvalues: Object;
    onsubmit: (values: Object) => void;
}>();

const { handleSubmit } = useForm({
    validationSchema: props.schema,
    initialValues: Object(props.initialvalues)
});

const onSubmit = handleSubmit((values) => props.onsubmit(values)); 

</script>

<template>
    <form @submit.prevent="onSubmit" class="space-y-2 w-400">
       <slot />
    </form>
</template>