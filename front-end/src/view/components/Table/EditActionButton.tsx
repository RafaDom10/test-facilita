import { FormEvent, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { IconButton, TextField } from "@mui/material";
import { Edit as EditIcon } from '@mui/icons-material';
import { FormData, schema } from "../../../app/types/schema";
import { Dialog } from "../Dialog";
import toast from "react-hot-toast";
import { clientsService } from '../../../app/services/clientsService/index';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ActionButtonProps } from "../../../app/types/actionBtnProps";
import { Payload } from "../../../app/types/clientPayload";
import { formatPhone } from "../../../app/utils/formatPhone";

export function EditActionButton({ row }: ActionButtonProps) {
  const queryClient = useQueryClient()

  const { original: rowData } = row
  const [open, setOpen] = useState<boolean>(false)

  const {
    register,
    formState: { errors, isDirty },
    reset,
    trigger,
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const handleOpenDialog = () => {
    reset({
      name: rowData.name,
      email: rowData.email,
      phone: rowData.phone,
      coordinates: rowData.coordinates,
    })
    setOpen(true)
  }

  const handleKeyUpPhoneField = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      formatPhone(event)
    }, [])

  const handleCloseDialog = () => {
    setOpen(false)
  }

  const onUpdate = async (payload: Payload) => {
    await clientsService.update(payload)
  }

  const { mutateAsync: updateClientFn } = useMutation({
    mutationFn: onUpdate,
    onSuccess(_, variables) {
      queryClient.setQueryData(['clients'], (data: Payload[]) => {

        const filteredData = data.filter(d => d.id !== rowData.id)

        return [...filteredData, {
          name: variables.name,
          email: variables.email,
          phone: variables.phone,
          coordinates: variables.coordinates
        }]
      })
    }
  })

  async function handleUpdateClient() {
    try {
      const triggerResult = await trigger()

      if (!triggerResult) {
        return
      }

      const payload = getValues()
      await updateClientFn({ ...payload, id: rowData.id })

      reset()
      setOpen(false)
      toast.success('Cliente criado com sucesso!')
    } catch {
      toast.error('Ocorreu um erro ao criar o cliente!')
    }
  }

  return (
    <>
      <IconButton onClick={handleOpenDialog}>
        <EditIcon />
      </IconButton>

      <Dialog
        title="Editar Client"
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
            label="Email"
            fullWidth
            error={'name' in errors}
            helperText={'email' in errors && errors.email?.message}
            {...register('email')}
          />
          <TextField
            label="Telefone"
            fullWidth
            {...register('phone')}
            onChange={(e) => handleKeyUpPhoneField(e)}
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
          onConfirm={handleUpdateClient}
          disabled={!isDirty}
        />
      </Dialog>
    </>
  )
}
