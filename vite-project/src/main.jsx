import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './Practice/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
