import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { posts } from "~/db/schema";

export type Post = InferSelectModel<typeof posts>;
export type NewPost = InferInsertModel<typeof posts>;

export type PostsData = Post[];