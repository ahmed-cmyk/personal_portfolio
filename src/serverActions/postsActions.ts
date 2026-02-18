import { createServerFn } from "@tanstack/react-start";
import { db } from "~/db";
import { posts } from "~/db/schema";
import { PostsData } from "~/types";
import { queryOptions } from "@tanstack/react-query";
import { eq } from "drizzle-orm";

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

export const getPost = createServerFn({ method: "GET" })
    .inputValidator((slug: string) => slug)
    .handler(
        async ({ data: slug }) => {
            const result = await db
                .select()
                .from(posts)
                .where(eq(posts.slug, slug))
                .limit(1)

            return result[0] ?? null;
        }
    )

export const postQueryOption = (slug: string) =>
    queryOptions({
        queryKey: ["post", slug],
        queryFn: () => getPost({ data: slug })
    })