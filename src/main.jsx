import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './assets/scss/base/fonts.scss'
import './assets/scss/main.scss'
import 'remixicon/fonts/remixicon.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
