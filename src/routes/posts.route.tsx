import { createFileRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router';
import Heading from '~/components/Heading';

export const Route = createFileRoute('/posts')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="mt-8 px-4 w-3/4 mx-auto">
      <Heading text="Posts" />
      <Outlet />
    </section>
  );
}
