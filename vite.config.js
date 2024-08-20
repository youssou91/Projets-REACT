import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    // Base URL du projet
  base: '/deploy-github',
  plugins: [react()],
  // Configuration spécifique au projet (si nécessaire)
});
