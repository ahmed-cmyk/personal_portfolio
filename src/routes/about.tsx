import { createFileRoute } from '@tanstack/react-router'
import Heading from '~/components/Heading';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="mt-8 px-4 max-w-2xl mx-auto">
      <Heading text="About Me" />
      <div className="mt-8 space-y-6 text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
        <p>
          I am a full-stack software engineer with a systems-first mindset.
          I build across the stack, but I think in terms of architecture,
          performance characteristics, data flow, and failure modes.
        </p>

        <p>
          I have built and maintained production systems involving
          high-throughput APIs, asynchronous processing pipelines,
          and modern frontend applications. I care about correctness
          under load, predictable behavior, and clean boundaries
          between layers.
        </p>

        <p>
          My core technical stack includes:
        </p>

        <ul className="list-disc pl-5 space-y-2 marker:text-stone-400">
          <li><strong>Frontend:</strong> React, Vue, React Query, TanStack Start</li>
          <li><strong>Backend:</strong> Python, PHP, Node.js</li>
          <li><strong>Databases & Storage:</strong> PostgreSQL, MySQL, Redis, SQLite</li>
          <li><strong>Architecture & Patterns:</strong> Event-driven systems, RESTful APIs, queue-based processing, background workers</li>
          <li><strong>Infrastructure & Tooling:</strong> Docker, DigitalOcean, Git, CI/CD (GitHub Actions)</li>
          <li><strong>Other:</strong> AI integration, data hashing & deduplication, performance analysis</li>
        </ul>

        <p>
          I prefer explicit systems over magical abstractions.
          I aim to write code that is measurable, testable,
          and maintainable under real-world constraints.
        </p>
      </div>
    </section>
  );
}