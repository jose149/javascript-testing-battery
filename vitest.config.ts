/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],

  test: {
    include:['**/javascript/**'],
    reporters: [
      // 'defult'
      // 'basic'
      'verbose',
      // 'dot'
      // 'json' 
      // 'html'
      // ['junit', { suiteName: 'UI tests' }]
    ],
    outputFile: {
      // junit: './junit-report.xml',
      // json:'./test-output.json',
      // html: './test-output.html'
    },
    coverage: {
      provider: 'istanbul', // or istanbul 'v8',
      reporter: ['text', 'json', 'html']
    },
  },
})