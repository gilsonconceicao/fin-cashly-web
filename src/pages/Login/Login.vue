<script lang="ts" setup>
import { Button } from '@/components/ui/button';
import { key_credentials_auth } from '@/constants/localstorage.keys';
import { useRouter } from 'vue-router';
import { loginInitialValues, loginSchema } from './LoginSchema';
import InputFormField from '@/components/forms/Fields/InputFormField.vue';
import ControlledForm from '@/components/forms/ControlledForm.vue';

const { push } = useRouter();

const onSubmit = (values: Object) => {
    localStorage.setItem(key_credentials_auth, JSON.stringify(values ?? {}));
    push('/');
};

</script>

<template>
    <div>
        <h1>Login</h1>

        <ControlledForm  :schema="loginSchema" :initialvalues="loginInitialValues" :onsubmit="onSubmit">
            <InputFormField label="E-mail" name="email" placeholder="E-mail" :required="true" type="email"/>
            <InputFormField label="Senha" name="password" placeholder="Senha" :required="true" type="password"/>
            <Button type="submit">
                Acessar
            </Button>
        </ControlledForm>
    </div>
</template>