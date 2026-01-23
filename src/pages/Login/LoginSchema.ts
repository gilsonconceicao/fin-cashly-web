import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

export const loginSchema = toTypedSchema(
  z.object({
    email: z.string().nonempty("Email precisa ser preenchido").email('Email inválido'),
    password: z.string().nonempty("Senha precisa ser preenchida").min(6, 'Mínimo 6 caracteres')
  })
)

export const loginInitialValues = {
    email: null, 
    password: null
}