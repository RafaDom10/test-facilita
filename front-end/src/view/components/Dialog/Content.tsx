import {
  Stack,
  DialogContent as MUIDialogContent, type DialogContentProps as MUIDialogContentProps,
} from "@mui/material";

export function DialogContent({ children, ...props }: MUIDialogContentProps) {
  return (
    <MUIDialogContent {...props}>
      <Stack spacing={2} p={2} sx={{ width: '500px' }}>
        {children}
      </Stack>
    </MUIDialogContent>
  )
}
