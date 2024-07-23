import { dbClient } from './client';
import { books } from './schema';

const booksData = [
    { title: 'alya sometimes hides her feelings in russian 1', image_url: 'https://m.media-amazon.com/images/I/81JddG6AU7L._AC_UF1000,1000_QL80_.jpg' },
    { title: 'alya sometimes hides her feelings in russian 2', image_url: 'https://m.media-amazon.com/images/I/81+T0hWMUyL._AC_UF1000,1000_QL80_.jpg' },
    { title: 'alya sometimes hides her feelings in russian 3', image_url: 'https://m.media-amazon.com/images/I/81K1Ws7es0L._AC_UF1000,1000_QL80_.jpg' },
    { title: 'alya sometimes hides her feelings in russian 4', image_url: 'https://m.media-amazon.com/images/I/91SIOLDinHL._AC_UF1000,1000_QL80_.jpg' },
    { title: 'alya sometimes hides her feelings in russian 4.5', image_url: 'https://m.media-amazon.com/images/I/51OpyKmsQrL.jpg' },
    { title: 'alya sometimes hides her feelings in russian 5', image_url: 'https://m.media-amazon.com/images/I/81SnOIF1SLL._AC_UF1000,1000_QL80_.jpg' },
    { title: 'alya sometimes hides her feelings in russian 6', image_url: 'https://imgv2-2-f.scribdassets.com/img/document/689641790/original/eb475ea996/1715938239?v=1' },
    { title: 'alya sometimes hides her feelings in russian 7', image_url: 'https://static.wikia.nocookie.net/roshidere/images/5/5a/Vol.7_illustration_14.png/revision/latest/scale-to-width-down/250?cb=20240323152404' },
    { title: 'spy x family 1', image_url: 'https://bci.kinokuniya.com/jsp/images/book-img/97819/97819747/9781974715466.JPG' },
    { title: 'spy x family 2', image_url: 'https://bci.kinokuniya.com/jsp/images/book-img/97819/97819747/9781974717248.JPG' },
    { title: 'spy x family 3', image_url: 'https://bci.kinokuniya.com/jsp/images/book-img/97819/97819747/9781974718160.JPG' },
    { title: 'spy x family 4', image_url: 'https://bci.kinokuniya.com/jsp/images/book-img/97819/97819747/9781974721030.JPG' },
    { title: 'spy x family 5', image_url: 'https://bci.kinokuniya.com/jsp/images/book-img/97819/97819747/9781974722945.JPG' },
    { title: 'spy x family 6', image_url: 'https://bci.kinokuniya.com/jsp/images/book-img/97861/97861657/9786165752619.JPG' },
    { title: 'spy x family 7', image_url: 'https://bci.kinokuniya.com/jsp/images/book-img/97819/97819747/9781974728480.JPG' },
    { title: 'spy x family 8', image_url: 'https://bci.kinokuniya.com/jsp/images/book-img/97840/97840888/9784088828435.JPG' },
    { title: 'spy x family 9', image_url: 'https://bci.kinokuniya.com/jsp/images/book-img/97861/97861658/9786165896566.JPG' },
    { title: 'the angel next door spoils me rotten 1', image_url: 'https://m.media-amazon.com/images/I/817Yi2LI-jL.jpg' },
    { title: 'the angel next door spoils me rotten 2', image_url: 'https://bci.kinokuniya.com/jsp/images/book-img/97819/97819753/9781975322694.JPG' },
    { title: 'the angel next door spoils me rotten 3', image_url: 'https://bci.kinokuniya.com/jsp/images/book-img/97819/97819753/9781975333409.JPG' },
];

async function seed() {
    for (const book of booksData) {
        await dbClient.insert(books).values(book).execute();//catagory create new table link by id
    }
    console.log('Books seeded successfully');
}

seed().catch(console.error);
