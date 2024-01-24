import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { Route as RouteIcon } from '@mui/icons-material'
import PersonIcon from '@mui/icons-material/Person';
import { Dialog } from "../Dialog";
import { useState } from "react";
import { blue } from '@mui/material/colors';

export function RouteButton() {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpenDialog = () => {
    setOpen(true)
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  const clients = [
    'client1',
    'client1',
    'client1',
    'client1',
    'client1',
    'client1',
    'client1',
    'client1',
    'client1',
    'client1'
  ]

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

        <List sx={{ pt: 0, maxHeight: '500px', minWidth: '500px' }}>
          {clients.map(( client, index ) => (
            <ListItem disableGutters key={index}>
              <ListItemButton onClick={() => {}}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={client} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Dialog>

    </>
  )
}
