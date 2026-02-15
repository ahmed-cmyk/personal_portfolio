import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2 text-center text-2xl">
      <h1></h1>
    </div>
  )
}
