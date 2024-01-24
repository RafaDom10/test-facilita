import { IconButton, TextField } from "@mui/material";
import { MRT_Row } from "material-react-table";
import { Edit as EditIcon } from '@mui/icons-material';
import { Dialog } from "../Dialog";
import { useState } from "react";


interface EditActionButtonProps {
  row: MRT_Row<{
    id: number;
    name: string;
    email: string;
    phone: string;
  }>
}

export function EditActionButton({ row }: EditActionButtonProps) {
  const { original: rowData } = row
  const [open, setOpen] = useState<boolean>(false)

  const handleOpenDialog = () => {
    setOpen(true)
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  const onSubmit = () => {
    console.log(rowData)
  }

  return (
    <>
      <IconButton
        onClick={handleOpenDialog}
      >
        <EditIcon />
      </IconButton>

      <Dialog
        title="Editar Client"
        open={open}
        onClose={handleCloseDialog}
      >

        <Dialog.Content>
          <TextField
            label="Nome"
            fullWidth
          />
          <TextField
            label="Email"
            fullWidth
          />
          <TextField
            label="Telefone"
            fullWidth
          />
          <TextField
            label="Cordenadas"
            fullWidth
          />
        </Dialog.Content>
        <Dialog.Actions
          onCancel={handleCloseDialog}
          onConfirm={onSubmit}
        />

      </Dialog>
    </>
  )
}
