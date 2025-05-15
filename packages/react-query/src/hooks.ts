// Re-export TanStack Query hooks
export {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
  useSuspenseQuery,
  useSuspenseInfiniteQuery,
  useMutationState,
  useIsFetching,
  useIsMutating,
} from '@tanstack/react-query';

// Custom hooks that leverage React 19 capabilities
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

/**
 * Hook to prefetch query data
 */
export function usePrefetchQuery<TData>(
  queryKey: unknown[],
  queryFn: () => Promise<TData>,
  options?: Record<string, any>
) {
  const queryClient = useQueryClient();
  
  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey,
      queryFn,
      ...options,
    });
  }, [queryClient, JSON.stringify(queryKey)]);
}