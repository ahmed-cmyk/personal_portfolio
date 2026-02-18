import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { postQueryOption } from "~/serverActions/postsActions";

export const Route = createFileRoute('/posts/$postSlug')({
    component: Post,
    loader: async ({ context, params }) => {
        await context.queryClient.ensureQueryData(postQueryOption(params.postSlug))
    }
})

function Post() {
    const { postSlug: slug } = Route.useParams();
    const { data: post } = useSuspenseQuery(postQueryOption(slug))

    return <h1>{post.title}</h1>
}

export default Post;