import { useMemo } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { themeSettings } from './theme'

const App = () => {
  const mode = 'light'
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>App</div>
    </ThemeProvider>
  )
}

export default App
