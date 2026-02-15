import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/')({
  component: Posts,
})

function Posts() {
  const loopCount = 10;

  return (
    <ul>
      {Array.from(Array(loopCount), (_, index) => (
        // A unique key is required for each element when looping in React.
        <li key={index} className='my-2'>
          <div className="w-64 h-32 bg-blue-500 flex justify-self-center"></div>
        </li>
      ))}
    </ul>
  );
}
