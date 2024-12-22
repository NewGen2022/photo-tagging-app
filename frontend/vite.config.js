import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
dotenv.config();

const PORT = parseInt(process.env.VITE_FRONTEND_PORT, 10) || 3000;

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: PORT,
        open: true,
    },
});
