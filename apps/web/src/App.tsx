import { useState } from 'react'

import { Button } from '@repo/ui/components/button'
import { Input } from '@repo/ui/components/input'
import { Calendar } from '@repo/ui/components/calendar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card'
import { useQuery } from '@repo/react-query'

export default function App() {
  const [count, setCount] = useState(0)
  const [date, setDate] = useState<Date | undefined>(undefined)

  const { data, isPending, error } = useQuery({
    queryKey: ['prodcuts'],
    queryFn: async () => {
      const reponse = await fetch('https://dummyjson.com/products')

      if (!reponse.ok) {
        throw new Error('Network response was not ok')
      }

      return reponse.json()
    },
  })

  if (isPending) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
            <CardContent className="px-0">
              <p>Product Fetched: {data.products.length}</p>
            </CardContent>
          </CardHeader>
        </Card>
        <Input className="h-12" placeholder="Type here..." />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow"
        />
        <Button
          onClick={() => setCount((count) => count + 1)}
          variant="default"
          type="button"
          className="cursor-pointer"
        >
          count is {count}
        </Button>
        <p className="text-gray-600">
          Edit <code className="font-mono text-blue-500">src/App.tsx</code> and
          save to test HMR
        </p>
      </div>
    </div>
  )
}
