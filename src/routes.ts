import { Router } from 'express';
import { getBooksPrototype } from '../db/prototype';

const router = Router();

router.get('/books', async (req, res) => {
    try {
        const books = await getBooksPrototype();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve books' });
    }
});

export default router;
