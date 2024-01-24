import { Box } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_PT_BR } from 'material-react-table/locales/pt-BR';
import { DeleteActionButton } from './DeleteActionButton';
import { EditActionButton } from './EditActionButton';

export function Table() {

  const columns = [
    {
      accessorKey: 'id',
      header: 'Id',
      size: 150,
    },
    {
      accessorKey: 'name',
      header: 'Cliente',
      size: 150,
    },
    {
      accessorKey: 'email',
      header: 'E-mail',
      size: 150,
    },
    {
      accessorKey: 'phone',
      header: 'Telefone',
      size: 150,
    },
  ]

  const data = [
    {
      id: 1,
      name: 'Client 1',
      email: 'r@mail.test.com',
      phone: '(11) 23442-23442'

    },
    {
      id: 2,
      name: 'Client 2',
      email: 'r@mail.test.com',
      phone: '(11) 23442-23442'

    },
    {
      id: 3,
      name: 'Client 3',
      email: 'r@mail.test.com',
      phone: '(11) 23442-23442'
    }
  ]

  return (
    <MaterialReactTable
      localization={MRT_Localization_PT_BR}
      columns={columns}
      data={data}
      enableRowActions
      renderRowActions={({ row }) => (
        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
          <EditActionButton row={row} />
          <DeleteActionButton row={row} />
        </Box>
      )}
    />
  );
}
