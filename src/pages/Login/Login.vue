<script lang="ts" setup>
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { key_credentials_auth } from '@/constants/localstorage.keys';
import { useRouter } from 'vue-router';
import { loginInitialValues, loginSchema } from './LoginSchema';
import { useField, useForm } from 'vee-validate';

const { push } = useRouter();

const { handleSubmit } = useForm({
    validationSchema: loginSchema,
    initialValues: Object(loginInitialValues)
})

const { value: email, errorMessage: emailError } = useField<string>('email')
const { value: password, errorMessage: passwordError } = useField<string>('password')

const onSubmit = handleSubmit(values => {
    console.log(values);
    localStorage.setItem(key_credentials_auth, JSON.stringify(values ?? {}));
    push('/');
});

</script>

<template>
    <div>
        <h1>Login</h1>

        <form @submit.prevent="onSubmit" class="space-y-2 w-400">

            <div class="grid w-full max-w-sm items-center gap-1.5">
                <Label for="email">Email</Label>
                <Input id="email" type="email" v-model="email" placeholder="Email" />
                <span>{{ emailError }}</span>
            </div>

            <div class="grid w-full max-w-sm items-center gap-1.5">
                <Label for="password">Senha</Label>
                <Input id="password" type="password" v-model="password" placeholder="Senha" />
                <span>{{ passwordError }}</span>
            </div>

            <Button type="submit">
                Acessar
            </Button>
        </form>
    </div>
</template>