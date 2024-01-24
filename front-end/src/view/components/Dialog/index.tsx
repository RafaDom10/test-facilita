import {
  Dialog as MUIDialog, type DialogProps as MUIDialogProps,
  DialogTitle as MUIDialogTitle,
} from "@mui/material";
import { DialogContent } from "./Content";
import { DialogActions } from "./Actions";

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

Dialog.Content = DialogContent
Dialog.Actions = DialogActions
