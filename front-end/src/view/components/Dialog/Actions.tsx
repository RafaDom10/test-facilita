import {
  Button,
  DialogActions as MUIDialogActions, type DialogActionsProps as MUIDialogActionsProps
} from "@mui/material";

interface DialogActionsProps extends MUIDialogActionsProps {
  onCancel: () => void
  onConfirm?: () => void
  disabled?: boolean
}

export function DialogActions({ onCancel, onConfirm, disabled, ...props }: DialogActionsProps) {
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
        disabled={disabled}
      >
        Confirmar
      </Button>
    </MUIDialogActions>
  )
}
