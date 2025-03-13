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

        // Загрузка картинки
        const uploadResponse = await axios.post(`${BASE_URL}/images/upload`, formData, {
            headers: { ...HEADERS, ...formData.getHeaders() }
        });

        imageId = uploadResponse.data.id;
        expect(imageId).toBeDefined();
    }, 30000);

    it('should fetch image details by ID and verify correct ID', async () => {
        // Получаем детали изображения по ID
        const imageDetailsResponse = await axios.get(`${BASE_URL}/images/${imageId}`, { headers: HEADERS });

        expect(imageDetailsResponse.status).toBe(200);
        expect(imageDetailsResponse.data.id).toBe(imageId); // Проверяем, что полученный ID совпадает
        expect(imageDetailsResponse.data).toHaveProperty('url');

        console.log(`✅ Details for image ID: ${imageId} fetched successfully`);
    });

    it('should add the image to favorites and verify correct image_id and image details', async () => {
        // Добавляем картинку в избранное
        const favouriteResponse = await axios.post(
            `${BASE_URL}/favourites`,
            { image_id: imageId },
            { headers: HEADERS }
        );
        favouriteId = favouriteResponse.data.id;
        expect(favouriteResponse.status).toBe(200);

        // Получаем список избранных и проверяем, что ID нашей картинки присутствует
        const favouritesList = await axios.get(`${BASE_URL}/favourites`, { headers: HEADERS });

        // Ищем картинку в списке избранных по ID
        const favourite = favouritesList.data.find((fav: any) => fav.image_id === imageId);

        // Проверка на наличие картинки в списке
        expect(favourite).toBeDefined();
        expect(favourite.image_id).toBe(imageId); // Убедимся, что image_id правильный

        // Проверка на наличие данных изображения
        expect(favourite.image).toBeDefined();
        expect(favourite.image).toHaveProperty('id', imageId);
        expect(favourite.image).toHaveProperty('url');
        expect(favourite.image.url).toBeDefined(); // Убедимся, что URL существует

        console.log('✅ Image added to favourites and verified successfully');
    });

    it('should fetch all favourite images and verify correct image_id and image details', async () => {
        const favouritesResponse = await axios.get(`${BASE_URL}/favourites`, { headers: HEADERS });

        expect(Array.isArray(favouritesResponse.data)).toBe(true);
        expect(favouritesResponse.data.length).toBeGreaterThan(0);

        // Проверка на корректность данных
        const favourite = favouritesResponse.data.find((fav: any) => fav.image_id === imageId);
        expect(favourite).toBeDefined();
        expect(favourite.image_id).toBe(imageId); // Проверка правильности image_id

        // Проверка, что в избранном есть данные изображения
        expect(favourite.image).toBeDefined();
        expect(favourite.image).toHaveProperty('id', imageId);
        expect(favourite.image).toHaveProperty('url');
        expect(favourite.image.url).toBeDefined();

        console.log('✅ Favourites fetched and verified successfully');
    });

    it('should vote for an image and verify correct image_id in vote and image details', async () => {
        // Голосуем за картинку
        const voteResponse = await axios.post(
            `${BASE_URL}/votes`,
            { image_id: imageId, value: 1 },
            { headers: HEADERS }
        );
        voteId = voteResponse.data.id;
        expect([200, 201]).toContain(voteResponse.status);

        // Проверяем, что голос был зарегистрирован для правильной картинки
        const voteInfo = await axios.get(`${BASE_URL}/votes/${voteId}`, { headers: HEADERS });
        expect(voteInfo.data.image_id).toBe(imageId);

        // Проверка на наличие данных изображения в голосовании
        expect(voteInfo.data.image).toBeDefined();
        expect(voteInfo.data.image).toHaveProperty('id', imageId);
        expect(voteInfo.data.image).toHaveProperty('url');
        expect(voteInfo.data.image.url).toBeDefined(); // Убедимся, что URL существует

        console.log('✅ Vote created and image details verified successfully');
    });

    it('should update vote for an image and verify correct image_id and image details', async () => {
        // Обновляем голос за картинку
        const updateVoteResponse = await axios.post(
            `${BASE_URL}/votes`,
            { image_id: imageId, value: 0 },
            { headers: HEADERS }
        );

        expect([200, 201]).toContain(updateVoteResponse.status);

        // Проверяем, что голос был обновлен
        const voteInfo = await axios.get(`${BASE_URL}/votes/${updateVoteResponse.data.id}`, { headers: HEADERS });
        expect(voteInfo.data.value).toBe(0); // Проверяем новый голос

        // Проверка на наличие данных изображения в голосовании
        expect(voteInfo.data.image).toBeDefined();
        expect(voteInfo.data.image).toHaveProperty('id', imageId);
        expect(voteInfo.data.image).toHaveProperty('url');
        expect(voteInfo.data.image.url).toBeDefined();

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
