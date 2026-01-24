<script lang="ts" setup>
import { Button } from '@/components/ui/button';
import { key_accesstoken } from '@/constants/localstorage.keys';
import { useRouter } from 'vue-router';
import { loginInitialValues, loginSchema } from './LoginSchema';
import InputFormField from '@/components/forms/Fields/InputFormField.vue';
import ControlledForm from '@/components/forms/ControlledForm.vue';
import { getAuth, signInWithEmailAndPassword, User } from "firebase/auth";
import { UserLoginType } from '@/services/types/generic.types';
import firebaseApp from '@/services/firebase';

const { push } = useRouter();

const onSubmit = async (values: UserLoginType) => {
    const { email, password } = values;
    const auth = getAuth(firebaseApp);
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user as { accessToken: string } & User;
            localStorage.setItem(key_accesstoken, user?.accessToken);
            push('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // to do for me: handle error and show message
        });
};

</script>

<template>
    <div>
        <h1>Login</h1>

        <ControlledForm :schema="loginSchema" :initialvalues="loginInitialValues"
            :onsubmit="(v) => onSubmit(v as UserLoginType)">
            <InputFormField label="E-mail" name="email" placeholder="E-mail" :required="true" type="email" />
            <InputFormField label="Senha" name="password" placeholder="Senha" :required="true" type="password" />
            <Button type="submit">
                Acessar
            </Button>
        </ControlledForm>
    </div>
</template>