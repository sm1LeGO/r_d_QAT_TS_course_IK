import axios from 'axios';
import { AxiosError } from 'axios';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { Pact } from '@pact-foundation/pact';
import path from 'path';

const pact = new Pact({
    consumer: 'PetstoreConsumer',
    provider: 'PetstoreAPI',
    port: 12345,
    log: path.resolve(__dirname, 'logs', 'pact.log'),
    dir: path.resolve(__dirname, 'pacts')
});

const BASE_URL = 'https://petstore.swagger.io/v2';
let petId: number;

describe('Petstore API Contract Tests', () => {
    beforeAll(async () => {
        await pact.setup();

        const createPetResponse = await axios.post(`${BASE_URL}/pet`, {
            id: 12345,
            name: 'Doggo',
            status: 'available'
        });
        petId = createPetResponse.data.id;
        expect(createPetResponse.status).toBe(200);
    });

    it('should fetch a pet by ID with correct schema', async () => {
        const response = await axios.get(`${BASE_URL}/pet/${petId}`);
        expect(response.status).toBe(200);

        expect(response.data).toMatchObject({
            id: expect.any(Number),
            name: expect.any(String),
            status: expect.stringMatching(/available|pending|sold/)
        });
    });

    it('should return 404 for non-existing pet', async () => {
        try {
            await axios.get(`${BASE_URL}/pet/999999`);
        } catch (error: any) {
            expect(error.response.status).toBe(404);
        }
    });

    it('should return a pet when requested by ID using Pact interaction', async () => {
        await pact.addInteraction({
            state: 'Pet with ID 1 exists',
            uponReceiving: 'a request for pet with ID 1',
            withRequest: {
                method: 'GET',
                path: '/pet/1'
            },
            willRespondWith: {
                status: 200,
                body: {
                    id: 1,
                    name: 'Doggo',
                    status: 'available'
                }
            }
        });

        const response = await axios.get('http://localhost:12345/pet/1');
        expect(response.status).toBe(200);
        expect(response.data).toMatchObject({
            id: 1,
            name: 'Doggo',
            status: 'available'
        });

        await pact.verify();
    });

    afterAll(async () => {
        if (petId) {
            try {
                const response = await axios.get(`${BASE_URL}/pet/${petId}`);
                if (response.status === 200) {
                    const deleteResponse = await axios.delete(`${BASE_URL}/pet/${petId}`);
                    expect(deleteResponse.status).toBe(200);
                    console.log(`✅ Pet with ID ${petId} deleted successfully`);
                }
            } catch (error: unknown) {
                if (error instanceof AxiosError) {
                    if (error.response && error.response.status === 404) {
                        console.log(`🐾 Pet with ID ${petId} not found. Skipping delete.`);
                    } else {
                        console.error('Error while deleting pet:', error.message);
                        throw error;
                    }
                } else {
                    console.error('Unknown error while deleting pet:', error);
                    throw error;
                }
            }
        }

        await pact.finalize();
    });
});
