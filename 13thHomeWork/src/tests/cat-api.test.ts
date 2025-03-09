import { describe, it, expect } from 'vitest';
import axios from 'axios';
import fs from 'fs';
import FormData from 'form-data';

const API_KEY = 'live_YjG7EoKk6YDbjSjcNLdJOlMduzERVPRB6LjiLkiJSRD99rjpsXxJInfSurke9QUQ'; // will be removed after merge
const BASE_URL = 'https://api.thecatapi.com/v1';

const api = axios.create({
    baseURL: BASE_URL,
    headers: { 'x-api-key': API_KEY }
});

describe('TheCatAPI Integration Tests', () => {
    let imageId: string;

    it(
        'should upload an image and return an image ID',
        async () => {
            const form = new FormData();
            form.append('file', fs.createReadStream('./orlando.jpg'));

            const response = await api.post('/images/upload', form, {
                headers: { ...form.getHeaders() }
            });

            expect(response.status).toBe(201);
            expect(response.data).toHaveProperty('id');
            imageId = response.data.id;
        }
    );

    it('should add the image to favorites', async () => {
        if (!imageId) throw new Error('imageId is undefined!');

        const response = await api.post<{ id: number }>('/favourites', {
            image_id: imageId
        });

        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('id');
    });

    it('should vote for an image', async () => {
        expect(imageId).toBeDefined();
        if (!imageId) throw new Error('imageId is undefined!');

        const response = await api.post('/votes', {
            image_id: imageId,
            value: 1
        });

        expect([200, 201]).toContain(response.status);
    });
});
