import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const books = pgTable('books', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    image_url: varchar('image_url', { length: 1024 }).notNull(),
});

export interface Book {
    id: number;
    title: string;
    image_url: string;
}
