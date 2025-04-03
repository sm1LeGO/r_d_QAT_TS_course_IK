import axios from 'axios';
import { Joke, JokeType } from './types';

const API_URL = 'http://localhost:3005';

export class ApiService {
    public static async getRandomJoke(): Promise<Joke> {
        const response = await axios.get<Joke>(`${API_URL}/random_joke`);
        return response.data;
    }

    public static async getJokeTypes(): Promise<JokeType[]> {
        const response = await axios.get<JokeType[]>(`${API_URL}/types`);
        return response.data;
    }

    public static async getFiveRandomJokes(): Promise<Joke[]> {
        const response = await axios.get<Joke[]>(`${API_URL}/jokes/random/5`);
        return response.data;
    }
}
