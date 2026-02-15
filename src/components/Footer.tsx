import { Link } from '@tanstack/react-router'

export function Footer() {
    return (
        <footer className="mt-auto py-8 text-center text-sm text-stone-500 dark:text-stone-400">
            <div className="flex justify-center gap-6 mb-4">
                <a
                    href="https://github.com/ahmed-cmyk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/ahmedikram398/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors"
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:ikramahmed398@gmail.com"
                    className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors"
                >
                    Email
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Ahmed Ikram. All rights reserved.</p>
        </footer>
    )
}
