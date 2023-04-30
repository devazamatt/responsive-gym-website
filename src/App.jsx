import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

const theme = createTheme({})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>App</div>
    </ThemeProvider>
  )
}

export default App
