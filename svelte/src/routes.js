// routes.js

// Importa los componentes de las vistas
import Home from "./routes/Home.svelte";
import About from "./routes/About.svelte";

// Define las rutas como un objeto clave-valor
const routes = {
    '/': Home,       // Ruta para la página de inicio
    '/about': About, // Ruta para la página "About"
};

export default routes;
