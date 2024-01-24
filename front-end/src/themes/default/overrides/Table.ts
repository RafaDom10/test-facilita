// ----------------------------------------------------------------------

export default function Table( theme ) {
  return {
    MuiTable: {
      styleOverrides: {
        root: {
          width:'100%',

          'td + td, th + th': { borderLeft: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5' },
          'td:first-child, th:first-child': { borderLeft: 'none' },
          'td:last-child, th:last-child': { borderRight: 'none' },

          '& .sticky-right': { position:'sticky', right:0 },
          '& .sticky-left': { position:'sticky', left:0 },
          '& .td-fit': { width: '1%', whiteSpace: 'nowrap' },
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        head: {
          'th': { backgroundColor: theme.palette.grey[300] }
        },
        root: {
          '&:not(.Mui-selected) td': { backgroundColor: '#fff' },
          '&:nth-child(even):not(.Mui-selected) td': { backgroundColor: theme.palette.grey[100] },
          '&.Mui-selected td': { backgroundColor: theme.palette.grey[200] },
          '&:hover td': { backgroundColor: `${theme.palette.grey[200]} !important` }
        }
      }
    }
  };
}
