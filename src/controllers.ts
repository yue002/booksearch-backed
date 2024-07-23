import { Request, Response } from 'express';
import { getBooksPrototype } from '../db/prototype';

export const getBooks = async (req: Request, res: Response) => {
    try {
        const books = await getBooksPrototype();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve books' });
    }
};
