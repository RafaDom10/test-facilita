import {
  Button,
  DialogActions as MUIDialogActions, type DialogActionsProps as MUIDialogActionsProps
} from "@mui/material";

interface DialogActionsProps extends MUIDialogActionsProps {
  onCancel: () => void
  onConfirm?: () => void
}

export function DialogActions({ onCancel, onConfirm, ...props }: DialogActionsProps) {
  return (
    <MUIDialogActions {...props} sx={{ m: 2 }}>
      <Button
        variant="text"
        color="error"
        onClick={onCancel}
      >
        Cancelar
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="success"
        onClick={onConfirm}
      >
        Confirmar
      </Button>
    </MUIDialogActions>
  )
}
