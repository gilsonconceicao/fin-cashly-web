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
import { ref } from 'vue';
import { toast } from 'vue-sonner';

const { push } = useRouter();
const isLoading = ref(false);

const onSubmit = async (values: UserLoginType) => {
    isLoading.value = true;
    const { email, password } = values;
    const auth = getAuth(firebaseApp);
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user as { accessToken: string } & User;
            localStorage.setItem(key_accesstoken, user?.accessToken);
            push('/');
        })
        .catch((error) => {
            const errorMessage = error.message;
            toast.error("Ops!", { description: errorMessage });
        })
        .finally(() => isLoading.value = false);
};

</script>

<template>
    <div class="flex items-center justify-center h-screen">
        <div class="p-4  rounded-sm w-[500px] space-y-3">
            <h1 class="text-3xl">FinCashly</h1>

            <ControlledForm :schema="loginSchema" :initialvalues="loginInitialValues"
                :onsubmit="(v) => onSubmit(v as UserLoginType)">
                <InputFormField label="E-mail" name="email" placeholder="E-mail" :required="true" type="email" />
                <InputFormField label="Senha" name="password" placeholder="Senha" :required="true" type="password" />
                <Button type="submit" class="w-full cursor-pointer" :disabled="isLoading">
                    {{ isLoading ? 'Carregando...' : 'Acessar' }}
                </Button>
            </ControlledForm>

        </div>
    </div>
</template>