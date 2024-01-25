import { Box } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_PT_BR } from 'material-react-table/locales/pt-BR';
import { DeleteActionButton } from './DeleteActionButton';
import { EditActionButton } from './EditActionButton';
import { clientsService } from '../../../app/services/clientsService';
import { useQuery } from '@tanstack/react-query';

export function Table() {
  const getClients = async () => {
    const clients = await clientsService.list()
    return clients
  }

  const { data } = useQuery({
    queryKey: ['clients'],
    queryFn: getClients
  })

  const columns = [
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
    {
      accessorKey: 'coordinates',
      header: 'Cordenadas',
      size: 150,
    },
  ]

  return (
    <MaterialReactTable
      localization={MRT_Localization_PT_BR}
      columns={columns}
      data={data ?? []}
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
