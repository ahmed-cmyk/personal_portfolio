import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/posts/$postId')({
    component: Post
})

function Post() {
    return <h1>Viewing a single post</h1>
}

export default Post;