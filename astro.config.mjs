// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        build: {
            rollupOptions: {
                output: {
                    entryFileNames: 'assets/js/[name].js',
                    assetFileNames: 'assets/css/[name].css'
                }
            }
        }

    },
});
