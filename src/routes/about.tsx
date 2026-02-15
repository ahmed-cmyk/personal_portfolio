import { createFileRoute } from '@tanstack/react-router'
import Heading from '~/components/Heading';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="mt-2 px-4">
      <Heading text="About" />
    </section>
  );
}
