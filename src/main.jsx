import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'remixicon/fonts/remixicon.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
