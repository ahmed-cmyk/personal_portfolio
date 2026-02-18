import { createServerFn } from "@tanstack/react-start";
import { db } from "~/db";
import { posts } from "~/db/schema";
import { PostsData } from "~/types";
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