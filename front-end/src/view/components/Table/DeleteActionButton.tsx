import { IconButton, Typography } from "@mui/material"
import { Close as DeleteIcon } from '@mui/icons-material';
import { useState } from "react";
import { Dialog } from "../Dialog";
import toast from "react-hot-toast";
import { clientsService } from "../../../app/services/clientsService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ActionButtonProps } from "../../../app/types/actionBtnProps";
import { Payload } from "../../../app/types/clientPayload";

export function DeleteActionButton({ row }: ActionButtonProps) {
  const queryClient = useQueryClient()

  const { original: rowData } = row
  const [open, setOpen] = useState<boolean>(false)

  const handleOpenDialog = () => {
    setOpen(true)
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  const onDelete = async (id: string) => {
    await clientsService.remove(id)
  }

  const { mutateAsync: removeClientFn } = useMutation({
    mutationFn: onDelete,
    onSuccess() {
      queryClient.setQueryData(['clients'], (data: Payload[]) => {
        const filteredData = data.filter( d => d.id !== rowData.id )
        return [ ...filteredData ]
      })
    }
  })

  async function handleRemoveClient() {
    try {
      await removeClientFn( rowData.id )

      handleCloseDialog()

      toast.success('Cliente deletado com sucesso!')
    } catch {
      toast.error('Ocorreu um erro ao deletar o cliente!')
    }
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

        <Dialog.Actions onCancel={handleCloseDialog} onConfirm={handleRemoveClient} />

      </Dialog>

    </>
  )
}
