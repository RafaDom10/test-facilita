import {
  Button, Stack,
  Dialog as MUIDialog, type DialogProps as MUIDialogProps,
  DialogTitle as MUIDialogTitle,
  DialogContent as MUIDialogContent, type DialogContentProps as MUIDialogContentProps,
  DialogActions as MUIDialogActions, type DialogActionsProps as MUIDialogActionsProps
} from "@mui/material";

interface DialogProps extends MUIDialogProps {
  title: string
}

export function Dialog({ children, title, ...props }: DialogProps) {
  return (
    <MUIDialog {...props}>
      <MUIDialogTitle>{title}</MUIDialogTitle>
      {children}
    </MUIDialog>
  )
}

function DialogContent({ children, ...props }: MUIDialogContentProps) {
  return (
    <MUIDialogContent {...props}>
      <Stack spacing={2} p={2} sx={{ width: '500px' }}>
        {children}
      </Stack>
    </MUIDialogContent>
  )
}

interface DialogActionsProps extends MUIDialogActionsProps {
  onCancel: () => void
  onConfirm?: () => void
}

function DialogActions({ onCancel, onConfirm, ...props }: DialogActionsProps) {
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

Dialog.Content = DialogContent
Dialog.Actions = DialogActions
