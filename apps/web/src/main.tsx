import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryProvider } from '@repo/react-query'

import App from './App'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider devtools>
      <App />
    </QueryProvider>
  </StrictMode>
)
