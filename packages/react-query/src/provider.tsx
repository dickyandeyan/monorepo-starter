import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Define type for provider props
interface QueryProviderProps {
  children: React.ReactNode
  defaultOptions?: Record<string, any>
  devtools?: boolean
}

// Create a reusable function to generate a query client
export const createQueryClient = (defaultOptions = {}) => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        retry: 1,
        gcTime: 10 * 60 * 1000, // 10 minutes
        refetchOnWindowFocus: true,
        ...defaultOptions,
      },
    },
  })
}

// Provider component using React 19 features
export const QueryProvider: React.FC<QueryProviderProps> = ({
  children,
  defaultOptions,
  devtools,
}) => {
  // Use cached state initialization for the QueryClient
  const [queryClient] = React.useState(() => createQueryClient(defaultOptions))

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {devtools && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  )
}
