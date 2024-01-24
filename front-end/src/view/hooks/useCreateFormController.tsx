import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
import { useOpenNewClientDialog } from './useOpenNewClientDialog'
import { useBetween } from 'use-between'

const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().min(1, 'E-mail é obrigatório').email('Informe um e-mail válido'),
  phone: z.string(),
  coordinates: z.string(),
})

type FormData = z.infer<typeof schema>

export function useCreateFormController () {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const { setOpen } = useBetween(useOpenNewClientDialog)

  const handleSubmit = hookFormHandleSubmit(async (data) => {
     try {
      console.log( data )
      setOpen( false )
      toast.success('Cliente criado com sucesso!')

     } catch {
      toast.error('Ocorreu um erro ao criar o cliente!')
     }

     reset()
  })

  return { handleSubmit, register, errors, reset }
}
