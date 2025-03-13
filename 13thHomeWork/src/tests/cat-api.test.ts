import axios from 'axios';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import fs from 'fs';
import FormData from 'form-data';

const API_KEY = 'live_YjG7EoKk6YDbjSjcNLdJOlMduzERVPRB6LjiLkiJSRD99rjpsXxJInfSurke9QUQ';
const BASE_URL = 'https://api.thecatapi.com/v1';
const HEADERS = { 'x-api-key': API_KEY };

let imageId: string;
let favouriteId: string;
let voteId: string;

describe('TheCatAPI Integration Tests', () => {
    beforeAll(async () => {
        const formData = new FormData();
        formData.append('file', fs.createReadStream('orlando.jpg'));

        const uploadResponse = await axios.post(`${BASE_URL}/images/upload`, formData, {
            headers: { ...HEADERS, ...formData.getHeaders() }
        });

        imageId = uploadResponse.data.id;
        expect(imageId).toBeDefined();

        await new Promise((resolve) => setTimeout(resolve, 2000));
    }, 30000);

    it('should fetch image details by ID', async () => {
        const imageDetailsResponse = await axios.get(`${BASE_URL}/images/${imageId}`, { headers: HEADERS });

        expect(imageDetailsResponse.status).toBe(200);
        expect(imageDetailsResponse.data.id).toBe(imageId);
        expect(imageDetailsResponse.data).toHaveProperty('url');

        console.log(`✅ Details for image ID: ${imageId} fetched successfully`);
    });

    it('should add the image to favorites and verify', async () => {
        const favouriteResponse = await axios.post(
            `${BASE_URL}/favourites`,
            { image_id: imageId },
            { headers: HEADERS }
        );
        favouriteId = favouriteResponse.data.id;
        expect(favouriteResponse.status).toBe(200);

        await new Promise((res) => setTimeout(res, 1000));

        const favouritesList = await axios.get(`${BASE_URL}/favourites`, { headers: HEADERS });
        const favourite = favouritesList.data.find((fav: any) => fav.id === favouriteId);
        expect(favourite).toBeDefined();
    });

    it('should fetch all favourite images and verify', async () => {
        const favouritesResponse = await axios.get(`${BASE_URL}/favourites`, { headers: HEADERS });

        expect(Array.isArray(favouritesResponse.data)).toBe(true);
        expect(favouritesResponse.data.length).toBeGreaterThan(0);

        console.log('✅ Favourites fetched successfully');
    });

    it('should vote for an image and verify vote exists', async () => {
        const voteResponse = await axios.post(
            `${BASE_URL}/votes`,
            { image_id: imageId, value: 1 },
            { headers: HEADERS }
        );
        voteId = voteResponse.data.id;
        expect([200, 201]).toContain(voteResponse.status);

        await new Promise((res) => setTimeout(res, 1000));

        const voteInfo = await axios.get(`${BASE_URL}/votes/${voteId}`, { headers: HEADERS });
        expect(voteInfo.data.image_id).toBe(imageId);

        console.log('✅ Vote created successfully');
    });

    it('should update vote for an image', async () => {
        const updateVoteResponse = await axios.post(
            `${BASE_URL}/votes`,
            { image_id: imageId, value: 0 },
            { headers: HEADERS }
        );

        expect([200, 201]).toContain(updateVoteResponse.status);

        const voteInfo = await axios.get(`${BASE_URL}/votes/${updateVoteResponse.data.id}`, { headers: HEADERS });
        expect(voteInfo.data.value).toBe(0);

        console.log(`✅ Vote for image ID: ${imageId} updated successfully`);
    });

    afterAll(async () => {
        if (favouriteId) {
            await axios.delete(`${BASE_URL}/favourites/${favouriteId}`, { headers: HEADERS });
        }
        if (voteId) {
            await axios.delete(`${BASE_URL}/votes/${voteId}`, { headers: HEADERS });
        }
    });
});
