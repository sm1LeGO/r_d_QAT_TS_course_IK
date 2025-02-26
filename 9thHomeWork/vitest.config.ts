import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        include: ['./tests/vitest/**/?(*.)+(spec|test).[t]s?(x)']
    }
});
