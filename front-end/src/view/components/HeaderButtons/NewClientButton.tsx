import { Button, TextField } from "@mui/material";
import { Add as AddIcon } from '@mui/icons-material'
import { Dialog } from "../Dialog";
import { FormEvent, useCallback, useState } from "react";
import { formatPhone } from "../../../app/utils/formatPhone";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData, schema } from "../../../app/types/schema";
import toast from "react-hot-toast";
import { clientsService } from "../../../app/services/clientsService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Payload {
  name: string
  email: string
  phone: string
  coordinates: string
}

export function NewClientButton() {
  const queryClient = useQueryClient()
  const [open, setOpen] = useState<boolean>(false)

  const {
    register,
    formState: { errors },
    reset,
    trigger,
    getValues
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const handleOpenDialog = () => {
    reset()
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleKeyUpPhoneField = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      formatPhone(event)
    }, [])

  const onSubmit = async (data: Payload) => {
    await clientsService.create( data )
  }

  const { mutateAsync: createClientFn } = useMutation({
    mutationFn: onSubmit,
    onSuccess(_, variables) {
      queryClient.setQueryData(['clients'], (data: Payload[]) => {
        return [ ...data, {
          name: variables.name,
          email: variables.email,
          phone: variables.phone,
          coordinates: variables.coordinates
        }]
      })
    }
  })

  async function handleCreateClient() {
    try {
      const triggerResult = await trigger()

      if ( !triggerResult ) {
        return
      }

      const payload = getValues()

      await createClientFn( payload )

      reset()
      setOpen(false)
      toast.success('Cliente criado com sucesso!')
    } catch {
      toast.error('Ocorreu um erro ao criar o cliente!')
    }
  }

  return (
    <>
      <Button
        variant="contained"
        color="success"
        startIcon={<AddIcon />}
        onClick={handleOpenDialog}
      >
        Novo Cliente
      </Button>

      <Dialog
        title="Novo Cliente"
        open={open}
        onClose={handleCloseDialog}
      >
          <Dialog.Content>
            <TextField
              label="Nome *"
              fullWidth
              error={'name' in errors}
              helperText={'name' in errors && errors.name?.message}
              {...register('name')}
            />
            <TextField
              label="Email *"
              fullWidth
              error={'name' in errors}
              helperText={'email' in errors && errors.email?.message}
              {...register('email')}
            />
            <TextField
              label="Telefone"
              fullWidth
              {...register('phone')}
              onChange={(e) => handleKeyUpPhoneField( e )}
            />
            <TextField
              label="Cordenadas"
              fullWidth
              error={'coordinates' in errors}
              helperText={'coordinates' in errors && errors.coordinates?.message}
              {...register('coordinates')}
            />
          </Dialog.Content>
          <Dialog.Actions
            onCancel={handleCloseDialog}
            onConfirm={handleCreateClient}
          />
      </Dialog>
    </>
  )
}
