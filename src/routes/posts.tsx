import { createFileRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/posts')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>Hello "/posts"!</h1>
      <Outlet />
    </div>
  );
}
