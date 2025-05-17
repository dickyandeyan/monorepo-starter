import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryProvider } from '@repo/react-query'

import App from './App'

import './index.css'
import { Sidebar, SidebarProvider } from '@repo/ui/components/sidebar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider devtools>
      <SidebarProvider>
        <Sidebar />
        <App />
      </SidebarProvider>
    </QueryProvider>
  </StrictMode>
)
