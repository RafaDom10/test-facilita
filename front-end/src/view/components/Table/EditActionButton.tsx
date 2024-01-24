import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { IconButton, TextField } from "@mui/material";
import { Edit as EditIcon } from '@mui/icons-material';
import { MRT_Row } from "material-react-table";
import { FormData, schema } from "../../../app/types/schema";
import { Dialog } from "../Dialog";
import toast from "react-hot-toast";

interface EditActionButtonProps {
  row: MRT_Row<{
    id: number;
    name: string;
    email: string;
    phone: string;
    coordinates: string;
  }>
}

export function EditActionButton({ row }: EditActionButtonProps) {
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

  const handleCloseDialog = () => {
    setOpen(false)
  }

  const onSubmit = async () => {
    try {
      const triggerResult = await trigger()

      if ( !triggerResult ) {
        return
      }

      const payload = getValues()
      console.log("🚀 ~ onSubmit ~ payload:", payload)

      setOpen(false)
      toast.success('Cliente atualizado com sucesso!')

    } catch {
      toast.error('Ocorreu um erro ao atualizar o cliente!')
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
          />
          <TextField
            label="Cordenadas"
            fullWidth
            {...register('coordinates')}
          />
        </Dialog.Content>
        <Dialog.Actions
          onCancel={handleCloseDialog}
          onConfirm={onSubmit}
          disabled={!isDirty}
        />
      </Dialog>
    </>
  )
}
