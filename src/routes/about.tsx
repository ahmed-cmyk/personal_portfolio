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
          I am a backend engineer passionate about system architecture and performance optimization.
          Over the past four years, I have built high-throughput systems and complex data pipelines,
          focusing on scalability, reliability, and efficiency.
        </p>
        <p>
          My core technical stack includes:
        </p>
        <ul className="list-disc pl-5 space-y-2 marker:text-stone-400">
          <li><strong>Languages:</strong> Python, PHP, Node.js</li>
          <li><strong>Databases & Storage:</strong> PostgreSQL, MySQL, Redis, SQLite</li>
          <li><strong>Architecture & Patterns:</strong> Event-Driven Design, RESTful APIs, Queue-Based Systems, Background Jobs</li>
          <li><strong>Tools & Deployment:</strong> Docker, DigitalOcean, Git, CI/CD (GitHub Actions)</li>
          <li><strong>Other:</strong> AI Integration, Data Hashing & Deduplication, Performance Optimizations</li>
        </ul>
        <p>
          I focus on writing clean, maintainable code and building systems that are reliable and easy to scale.
        </p>
      </div>
    </section>
  );
}
