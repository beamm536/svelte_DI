<script>
//aqui las importaciones
import Counter from './lib/Counter.svelte';
import InputUsuario from './lib/InputUsuario.svelte';

import Router from "svelte-spa-router";
    import routes from './routes.js';
</script>

<main>
  <link rel="stylesheet" href="css/styles.css">

  <Router {routes} />

  <div class="viewContainer">
    <!-- <Counter /> -->

      <h1>Welcome Back!</h1>
      <p>Login</p>

      <div class="form-container">
        
        <InputUsuario />

        
        <p>Or signup with Google</p>
        <button class="secondary">Continue with Google</button>

        <p>Don't have an account? <a href="#">Signup</a></p>
      </div>

      <br>
      <p>Pruebas para el email: usuario.ejemplo@dominio.com</p>
  </div>
</main>

