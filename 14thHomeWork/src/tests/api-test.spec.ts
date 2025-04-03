import { describe, it, expect } from 'vitest';
import { ApiService } from '../services/api-services';
import { Joke, JokeType } from '../services/types';

describe('API Tests', () => {
    it('should return a random joke with correct structure', async () => {
        const joke: Joke = await ApiService.getRandomJoke();

        console.log(joke);

        expect(joke).toHaveProperty('setup');
        expect(typeof joke.setup).toBe('string');
        expect(joke.setup).not.toBe('');

        expect(joke).toHaveProperty('punchline');
        expect(typeof joke.punchline).toBe('string');
        expect(joke.punchline).not.toBe('');
    });

    it('should return valid joke types', async () => {
        const jokeTypes: JokeType[] = await ApiService.getJokeTypes();

        const validTypes = ['general', 'programming', 'knock-knock', 'funny', 'punny', 'dark'];

        jokeTypes.forEach((type) => {
            console.log('Type from API:', type);
            console.log('Valid types:', validTypes);

            expect(typeof type).toBe('string');
            expect(validTypes).toContain(type);
        });
    });


    it('should return 5 random jokes', async () => {
        const jokes: Joke[] = await ApiService.getFiveRandomJokes();

        expect(jokes.length).toBe(5);

        jokes.forEach((joke) => {
            expect(joke).toHaveProperty('setup');
            expect(typeof joke.setup).toBe('string');
            expect(joke.setup).not.toBe('');

            expect(joke).toHaveProperty('punchline');
            expect(typeof joke.punchline).toBe('string');
            expect(joke.punchline).not.toBe('');
        });
    });

    it('should return unique jokes', async () => {
        const jokes: Joke[] = await ApiService.getFiveRandomJokes();

        const uniqueJokes = new Set(jokes.map(joke => joke.setup + joke.punchline));

        expect(uniqueJokes.size).toBe(5);
    });

    it('should not contain HTML in jokes', async () => {
        const jokes: Joke[] = await ApiService.getFiveRandomJokes();
        const htmlRegex = /<\/?[a-z][\s\S]*>/i;

        jokes.forEach((joke) => {
            expect(htmlRegex.test(joke.setup)).toBe(false);
            expect(htmlRegex.test(joke.punchline)).toBe(false);
        });
    });
});
