import { Link } from "@tanstack/react-router";

interface PostProps {
  post: {
    id: number;
    slug: string;
    title: string;
    content: string;
    createdAt: string | null;
    updatedAt: string | null;
  };
}

function Post({ post }: PostProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-zinc-200 dark:border-zinc-800 w-full">
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 line-clamp-2">
              {post.title}
            </h2>
            {post.createdAt && (
              <span className="text-sm text-zinc-400 dark:text-zinc-500 ml-4 flex-shrink-0">
                {new Date(post.createdAt).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <Link
            to="/posts/$postSlug"
            params={{ postSlug: post.slug }}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Read more
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Post;