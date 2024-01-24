// ----------------------------------------------------------------------

export default function Paper() {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 0,
          '&:focus-visible': { outline:'none' }
        }
      }
    }
  };
}
