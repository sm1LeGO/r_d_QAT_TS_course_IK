export interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

export type JokeType = 'general' | 'programming' | 'dad' | 'knock-knock' | 'punny' | 'dark';
