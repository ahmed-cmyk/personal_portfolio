import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-4">
      <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Ahmed</h1>
      <p className="text-xl md:text-2xl mt-2 text-gray-300">Backend & Full-Stack Developer</p>
      <div className="flex gap-2 mt-4">
        <button className="btn-normal bg-blue-600 hover:bg-blue-800">
          Who am I?
        </button>
        <button className="btn-normal border border-blue-600 hover:bg-blue-200/30">
          Contact Me
        </button>
      </div>
    </section>
  )
}
