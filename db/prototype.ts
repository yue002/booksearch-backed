import { dbClient } from './client';
import { books, Book } from './schema';

export const getBooksPrototype = async (): Promise<Book[]> => {
    const result = await dbClient.select().from(books).execute();
    return result;
};
