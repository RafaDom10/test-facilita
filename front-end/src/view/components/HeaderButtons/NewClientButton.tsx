import { Button, TextField } from "@mui/material";
import { Add as AddIcon } from '@mui/icons-material'
import { Dialog } from "../Dialog";
import { useFormController } from "../../hooks/useFormController";
import { useOpenNewClientDialog } from "../../hooks/useOpenNewClientDialog";
import { useBetween } from "use-between";

export function NewClientButton() {
  const { register, handleSubmit, reset, errors } = useFormController()
  const { open, setOpen } = useBetween(useOpenNewClientDialog)

  const handleOpenDialog = () => {
    reset()
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

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
        <form  onSubmit={handleSubmit}>
          <Dialog.Content>
            <TextField
              label="Nome"
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
            // onConfirm={onSubmit}
          />
        </form>
      </Dialog>
    </>
  )
}
