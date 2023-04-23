/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import linaria from '@linaria/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        react(),
        linaria({
            include: ['**/*.{ts,tsx}'],
            babelOptions: {
                presets: ['@babel/preset-typescript', '@babel/preset-react'],
            },
        }),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/setupTests.ts'],
    },
});
