import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Agrega soporte para archivos .gltf y .glb como activos
  assetsInclude: ['**/*.gltf', '**/*.glb'],
})
