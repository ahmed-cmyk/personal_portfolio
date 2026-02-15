import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-200px)] px-4 max-w-6xl mx-auto gap-12">
      <div className="flex-1 text-left">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
          Ahmed Ikram
        </h1>
        <h2 className="text-xl md:text-2xl mt-4 font-medium text-stone-600 dark:text-stone-400">
          Backend & Fullstack Developer
        </h2>
        <p className="text-lg mt-6 text-stone-500 dark:text-stone-400 leading-relaxed max-w-lg">
          4 years of experience building scalable systems, designing robust APIs, and optimizing database performance.
          Skilled in both backend and frontend development, with a focus on reliability and efficiency.
        </p>
        <div className="flex gap-4 mt-10">
          <button className="btn-primary">
            View Projects
          </button>
          <Link to="/services">
            <button className="btn-outline">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="/abstract-forms.png"
          alt="Stylistic Abstract Art"
          className="w-full max-w-md object-contain opacity-90 dark:opacity-80 rounded-2xl shadow-xl"
        />
      </div>
    </section>
  )
}
