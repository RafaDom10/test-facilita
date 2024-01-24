import { GlobalStyles as GlobalThemeStyles } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export function GlobalStyles () {

  const theme = useTheme()

  return (
    <GlobalThemeStyles
      styles={{
        html: { height: '100%', WebkitOverflowScrolling: 'touch' },
        '*': {  margin: 0, padding: 0, boxSizing: 'border-box' },
        'body, #app': { minHeight: '100vh', backgroundColor: '#f2f2f2' },
        '#app': { display: 'flex' },
        '#root': { width: '100%', height: '100%' },
        a: { textDecoration: 'none' },
        input: {
          '&[type=number]': {
            '&::-webkit-outer-spin-button': { margin: 0, WebkitAppearance: 'none' },
            '&::-webkit-inner-spin-button': { margin: 0, WebkitAppearance: 'none' }
          }
        },
        textarea: {
          '&::-webkit-input-placeholder': { color: theme.palette.text.disabled },
          '&::-moz-placeholder': { opacity: 1, color: theme.palette.text.disabled },
          '&:-ms-input-placeholder': { color: theme.palette.text.disabled },
          '&::placeholder': { color: theme.palette.text.disabled }
        },

        img: { display: 'block', maxWidth: '100%' },

        '.MuiTabs-scrollButtons.Mui-disabled': {
          opacity: 0.3
        },

      }}
    />
  )
}
