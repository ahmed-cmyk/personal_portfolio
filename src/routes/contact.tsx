import { createFileRoute } from '@tanstack/react-router'
import Heading from '~/components/Heading';

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="mt-8 px-4 max-w-2xl mx-auto">
      <Heading text="Get in Touch" />
      <div className="mt-8 text-lg text-stone-600 dark:text-stone-300">
        <p className="leading-relaxed">
          I'm currently open to new opportunities and interesting projects.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="mt-8">
          <a href="mailto:ahmed@example.com" className="btn-primary inline-block no-underline">
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}
