ALTER TABLE `posts` ADD `slug` text NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `posts_slug_unique` ON `posts` (`slug`);