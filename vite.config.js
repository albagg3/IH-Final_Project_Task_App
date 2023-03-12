import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //Es la carpeta a la que vamos a avincular del github pages
  //carpeta donde creara el build
  base: process.env.NODE_ENV === 'production' ? '/IH-Final_Project_Task_App/' : '/',
  build: { 
    outDir: 'docs',
    rollupOptions: {
      output: {
          entryFileNames: `assets/file_[name].[hash].js`,
          chunkFileNames: `assets/file_[name].[hash].js`,
          assetFileNames: `assets/file_[name].[hash].[ext]`,
      },
  }
},
//Comprobamos si estamos en producion y la base es el nombre del repositorio en github, si no raiz
//condicion ? 'nombre-repositorio'
//if (process.env.NODE_ENV === 'production'){
//   base: 'production'
// } else{
//   base:'/'
// }
// 
  server:{
  base: process.env.NODE_ENV === 'production' ? '/IH-Final_Project_Task_App/' :'/'
}
})
