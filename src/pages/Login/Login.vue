<script lang="ts" setup>
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { key_credentials_auth } from '@/constants/localstorage.keys';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const { push } = useRouter();

var form = reactive<{ email: string, password: string }>({
    email: "",
    password: ""
})

const handleSubmitForm = () => {
    if (Object.values(form).some(e => e === null || e.toString()?.length === 0)) {
        alert("Preencha os campos para seguir em frente")
    } else {
        localStorage.setItem(key_credentials_auth, JSON.stringify(form ?? {})); 
        push('/')
    }
}

</script>

<template>
    <div>
        <h1>Login</h1>

        <form @submit.prevent="handleSubmitForm" class="space-y-2 w-400">

            <div class="grid w-full max-w-sm items-center gap-1.5">
                <Label for="email">Email</Label>
                <Input id="email" type="email" v-model="form.email" placeholder="Email" />
            </div>

            <div class="grid w-full max-w-sm items-center gap-1.5">
                <Label for="password">Senha</Label>
                <Input id="password" type="password" v-model="form.password" placeholder="Senha" />
            </div>

            <Button type="submit">
                Acessar
            </Button>
        </form>
    </div>
</template>