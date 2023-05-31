import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";
import { InputOptions, OutputOptions, rollup } from "rollup";

const CompileTsServiceWorker = () => ({
  name: 'compile-typescript-service-worker',
  async writeBundle() {
    const inputOptions: InputOptions = {
      input: 'src/firebase-messaging-sw.ts',
    }
    const outputOptions: OutputOptions = {
      file: 'dist/firebase-messaging-sw.js',
      format: 'es',
    }
    const bundle = await rollup(inputOptions)
    await bundle.write(outputOptions)
    await bundle.close()
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(),
    CompileTsServiceWorker(),
  ]
})
