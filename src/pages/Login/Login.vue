<script lang="ts" setup>
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { key_credentials_auth } from '@/constants/localstorage.keys';
import { useRouter } from 'vue-router';
import { loginInitialValues, loginSchema } from './LoginSchema';
import { useField, useForm } from 'vee-validate';
import InputFormField from '@/components/forms/InputFormField.vue';

const { push } = useRouter();

const { handleSubmit } = useForm({
    validationSchema: loginSchema,
    initialValues: Object(loginInitialValues)
});

const onSubmit = handleSubmit(values => {
    localStorage.setItem(key_credentials_auth, JSON.stringify(values ?? {}));
    push('/');
});

</script>

<template>
    <div>
        <h1>Login</h1>

        <form @submit.prevent="onSubmit" class="space-y-2 w-400">
            <InputFormField label="E-mail" name="email" placeholder="E-mail" :required="true" type="email"/>
            <InputFormField label="Senha" name="password" placeholder="Senha" :required="true" type="password"/>
            <Button type="submit">
                Acessar
            </Button>
        </form>
    </div>
</template>