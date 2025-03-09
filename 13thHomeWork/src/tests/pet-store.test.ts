import { describe, it, expect } from 'vitest';
import axios, { AxiosError } from 'axios';

const BASE_URL = 'https://petstore.swagger.io/v2';

interface Pet {
    id: number;
    name: string;
    status: string;
}

describe('Petstore API Contract Tests', () => {
    const petId = 1017;

    it('should create a new pet', async () => {
        const petData: Pet = { id: petId, name: 'Doggo', status: 'available' };
        const response = await axios.post<Pet>(`${BASE_URL}/pet`, petData);

        expect(response.status).toBe(200);
        expect(response.data).toMatchObject(petData);
    });

    it('should fetch a pet by ID', async () => {
        const maxRetries = 5;
        let pet;

        for (let i = 0; i < maxRetries; i++) {
            try {
                const response = await axios.get(`${BASE_URL}/pet/${petId}`);
                if (response.status === 200) {
                    pet = response.data;
                    break;
                }
            } catch {
                await new Promise((res) => setTimeout(res, 500));
            }
        }

        expect(pet).toBeDefined();
        expect(pet.id).toBe(petId);
    });


    it('should delete a pet', async () => {
        try {
            await axios.get(`${BASE_URL}/pet/${petId}`);
            const response = await axios.delete(`${BASE_URL}/pet/${petId}`);
            expect(response.status).toBe(200);
        } catch (error: unknown) {
            if (error instanceof AxiosError && error.response?.status === 404) {
                console.warn(`Pet with ID ${petId} already removed.`);
            } else {
                throw error;
            }
        }
    });
});
