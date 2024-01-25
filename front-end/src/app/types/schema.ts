import { z } from 'zod'

export const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().min(1, 'E-mail é obrigatório').email('Informe um e-mail válido'),
  phone: z.string(),
  coordinates: z.string().max(3, 'Cordenadas devem ser inseridas como "1,3"').regex(new RegExp('^[0-9]+,[0-9]+$')),
})

export type FormData = z.infer<typeof schema>
