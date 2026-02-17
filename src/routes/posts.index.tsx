import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import { NoPosts } from '~/components/NoPosts';
import Post from '~/components/Post';
import { postsQueryOptions } from '~/serverActions/postsActions';

export const Route = createFileRoute('/posts/')({
  component: Posts,
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(postsQueryOptions())
  }
})

function Posts() {
  const { data: posts } = useSuspenseQuery(postsQueryOptions())
  console.log("Posts found", posts);
  if (posts.length === 0) {
    return <NoPosts />
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Post />
        </li>
      ))}
    </ul>
  );
}
