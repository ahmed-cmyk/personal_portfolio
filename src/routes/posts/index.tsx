import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import { NoPosts } from '~/components/NoPosts';
import Post from '~/components/Post';

export const Route = createFileRoute('/posts/')({
  component: Posts,
})

function Posts() {
  const [posts, setPosts] = useState([]);

  if (posts.length === 0) {
    return <NoPosts />
  }

  return (
    <ul>
      {posts.map((post, index) => (
        <li key={index}>
          <Post />
        </li>
      ))}
    </ul>
  );
}
