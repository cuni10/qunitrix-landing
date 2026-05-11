import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  server: {
    host: true, // Esto expone el servidor a la red local siempre
    port: 4321, // Puedes cambiar el puerto si prefieres otro
  },
});
