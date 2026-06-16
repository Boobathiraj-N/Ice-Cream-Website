import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Import (Extra add this)

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. Add as plugin (Extra add this)
  ],
})




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
