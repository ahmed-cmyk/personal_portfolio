import { db } from '~/db';
import { posts } from '~/db/schema';
import { sql } from 'drizzle-orm';
import fs from 'node:fs';
import matter from 'gray-matter';
import path from "path";
import slug from 'slug';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export const readPostsFromFilesystem = (async () => {
    try {
        const files = fs.readdirSync(postsDirectory);

        for (const file of files) {
            const fullPath = path.join(postsDirectory, file);
            const fileContent = fs.readFileSync(fullPath, 'utf-8')

            const { data, content } = matter(fileContent);

            if (!data.title) {
                throw new Error(`File ${fullPath} missing title`);
            }

            const postSlug = slug(data?.title);

            console.log('Inserting/Updating:', data.title, postSlug);

            // Upsert logic (insert or update if slug already exists)
            await db
            .insert(posts)
            .values({
                slug: postSlug,
                title: data.title,
                content: content,
                // optional: parse date string
                createdAt: data.date || new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            })
            .onConflictDoUpdate({
                target: posts.slug, // assumes you made slug unique
                set: {
                title: data.title,
                content: content,
                updatedAt: sql`CURRENT_TIMESTAMP`,
                },
            });

            console.log('All posts seeded successfully!');
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error occured while reading files", error.message);
        } else {
            console.error('Caught an unknown error:', error);
        }
    }
});