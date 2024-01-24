import { Card, CardContent, Paper, Typography } from '@mui/material';
import { HeaderButtons } from '../components/HeaderButtons';
import { Table } from '../components/Table';

export function Layout() {
  return (
    <>
      <Card sx={{ m: 4 }} component={Paper} elevation={8}>
        <CardContent sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h1'>Cadastro de Clientes</Typography>
          <HeaderButtons />
        </CardContent>
      </Card>

      <Card sx={{ m: 4 }} component={Paper} elevation={8}>
        <CardContent>
          <Table />
        </CardContent>
      </Card>
    </>
  )
}
