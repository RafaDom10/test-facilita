import { Stack } from "@mui/material";
import { NewClientButton } from "./NewClientButton";
import { RouteButton } from "./RouteButton";

export function HeaderButtons() {
  return (
    <Stack
      direction='row'
      spacing={1}
      justifyContent='flex-end' sx={{
        mb: 2
      }}>
      <RouteButton />
      <NewClientButton />
    </Stack>
  )
}
