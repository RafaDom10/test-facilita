import { Alert, Avatar, Button, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";
import { Route as RouteIcon } from '@mui/icons-material'
import PersonIcon from '@mui/icons-material/Person';
import { Dialog } from "../Dialog";
import { useState } from "react";
import { clientsService } from "../../../app/services/clientsService";
import { ListOrderedByShortestRouteResponse } from "../../../app/services/clientsService/listOrderedByShortestRoute";

export function RouteButton() {
  const [open, setOpen] = useState<boolean>(false)

  const [data, setData] = useState<ListOrderedByShortestRouteResponse[]>([])

  const getClients = async () => {
    const clients = await clientsService.listOrderedByShortestRoute()
    setData(clients)
  }

  const handleOpenDialog = () => {
    getClients()
    setOpen(true)
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  return (

    <>
      <Button
        variant="contained"
        color="info"
        startIcon={<RouteIcon />}
        onClick={handleOpenDialog}
      >
        Rotas
      </Button>

      <Dialog
        title="Rota dos Clientes"
        open={open}
        onClose={handleCloseDialog}
      >

        <Stack direction='row' justifyContent={'center'}>
          <Alert severity="info" sx={{ width: '400px', mb: 2, borderRadius: 1 }}>
          <Typography>Clientes ordenados de acordo com a menor rota</Typography>
          </Alert>
        </Stack>

        <List sx={{ pt: 0, maxHeight: '500px', minWidth: '500px' }}>
          {data.map((client, index) => (
            <ListItem disableGutters key={index}>
              <ListItemButton sx={{ cursor: 'default' }}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: '#C7C7C7', color: '#F2F2F2' }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={client.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Dialog>

    </>
  )
}
