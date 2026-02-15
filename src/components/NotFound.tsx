import { Link } from '@tanstack/react-router'

export function NotFound({ children }: { children?: any }) {
  return (
    <div className="space-y-4 p-4 text-center">
      <div className="text-stone-600 dark:text-stone-400">
        {children || <p>The page you are looking for does not exist.</p>}
      </div>
      <p className="flex items-center justify-center gap-4 flex-wrap">
        <button
          onClick={() => window.history.back()}
          className="btn-outline"
        >
          Go back
        </button>
        <Link
          to="/"
          className="btn-primary"
        >
          Start Over
        </Link>
      </p>
    </div>
  )
}
