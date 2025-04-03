import express, { Request, Response } from 'express';

const app = express();
const port = 3005;

app.get('/random_joke', (req: Request, res: Response) => {
    const joke = {
        setup: 'Why don’t skeletons fight each other?',
        punchline: 'They don’t have the guts.'
    };
    res.json(joke);
});

app.get('/types', (req: Request, res: Response) => {
    const types = ['funny', 'punny', 'dark'];
    res.json(types);
});

app.get('/jokes/random/5', (req: Request, res: Response) => {
    const jokes = [
        { setup: 'Why don’t skeletons fight each other?', punchline: 'They don’t have the guts.' },
        { setup: 'What’s brown and sticky?', punchline: 'A stick.' },
        { setup: 'Why don’t oysters share their pearls?', punchline: 'Because they’re shellfish.' },
        { setup: 'What did the ocean say to the beach?', punchline: 'Nothing, it just waved.' },
        { setup: 'Why did the chicken join a band?', punchline: 'Because it had drumsticks!' }
    ];
    res.json(jokes);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
