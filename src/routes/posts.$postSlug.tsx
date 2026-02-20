import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { postQueryOption } from "~/serverActions/postsActions";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

export const Route = createFileRoute('/posts/$postSlug')({
    component: Post,
    loader: async ({ context, params }) => {
        await context.queryClient.ensureQueryData(postQueryOption(params.postSlug))
    }
})

function Post() {
    const { postSlug: slug } = Route.useParams();
    const { data: post } = useSuspenseQuery(postQueryOption(slug));

    const htmlContent = String(unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSanitize)
        .use(rehypeStringify)
        .processSync(post.content)
    );

    return (
        <article
            className="prose dark:prose-invert max-w-none leading-[1.5] md:leading-[2]"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
    )
}

export default Post;