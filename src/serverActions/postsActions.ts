import { createServerFn } from "@tanstack/react-start";
import { db } from "~/db";
import { posts } from "~/db/schema";
import { NewPost, PostsData } from "~/types";
import { queryOptions } from "@tanstack/react-query";

export const getPosts = createServerFn({ method: "GET" }).handler(
    async () => {
        return await db.select().from(posts) as PostsData;
    }
);

export const postsQueryOptions = () =>
    queryOptions({
        queryKey: ["posts"],
        queryFn: () => getPosts(),
    })

export const createPost = createServerFn({ method: "POST" })
    .inputValidator((data: { title: string; content: string }) => {
        // Validate post data
        if (!data.title || !data.title.trim()) {
            throw new Error("Title is required");
        }
        if (!data.content || !data.content.trim()) {
            throw new Error("Content is required");
        }
        return data;
    })
    .handler(async ({ data }) => {
        const post: NewPost = {
            title: data.title,
            content: data.content,
        }

        await db.insert(posts).values(post);
        return post;
    });