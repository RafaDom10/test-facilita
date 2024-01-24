import { IconButton, Typography } from "@mui/material"
import { Close as DeleteIcon } from '@mui/icons-material';
import { MRT_Row } from "material-react-table";
import { useState } from "react";
import { Dialog } from "../Dialog";
import toast from "react-hot-toast";

interface DeleteActionButtonProps {
  row: MRT_Row<{
    id: number;
    name: string;
    email: string;
    phone: string;
  }>
}

export function DeleteActionButton({ row }: DeleteActionButtonProps) {
  const { original: rowData } = row
  const [open, setOpen] = useState<boolean>(false)

  const handleOpenDialog = () => {
    setOpen(true)
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  const onDelete = () => {
    handleCloseDialog()
    toast.success('Cliente Deletado com sucesso!')
  }

  return (
    <>
      <IconButton
        color="error"
        onClick={handleOpenDialog}
      >
        <DeleteIcon />
      </IconButton>

      <Dialog
        open={open}
        title="Deletar Cliente"
        onClose={handleCloseDialog}
      >
        <Dialog.Content>
          <Typography>
            Você tem certeza que deseja excluir o cliente <strong>{rowData.name}</strong>?
          </Typography>
        </Dialog.Content>

        <Dialog.Actions onCancel={handleCloseDialog} onConfirm={onDelete} />

      </Dialog>

    </>
  )
}
