import express from 'express';
import dotenv from 'dotenv';
import { getBooksPrototype } from '../db/prototype';

dotenv.config();

const app = express();
app.use(express.json());

app.get('/books', async (req, res) => {
    try {
        const books = await getBooksPrototype();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve books' });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
