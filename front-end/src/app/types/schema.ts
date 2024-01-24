import { z } from 'zod'

export const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().min(1, 'E-mail é obrigatório').email('Informe um e-mail válido'),
  phone: z.string(),
  coordinates: z.string(),
})

export type FormData = z.infer<typeof schema>
