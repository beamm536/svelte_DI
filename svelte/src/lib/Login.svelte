<script>
    //aqui las importaciones

   
    import InputUsuario from '../lib/InputUsuario.svelte';
    </script>
    
    <main>
      <link rel="stylesheet" href="css/styles.css">
    
      
    
      <div class="viewContainer">
        <!-- <Counter /> -->
    
          <h1>Welcome Back!</h1>
          <p>Login</p>
    
          <div class="form-container">
            
            <InputUsuario />
    
            
            <p>Or signup with Google</p>
            <button class="secondary">Continue with Google</button>
    
            <p>Don't have an account? <a href="/">Signup</a></p>
          </div>
    
          <br>
          <p>Pruebas para el email: usuario.ejemplo@dominio.com</p>
          <p>Pruebas password: w3Unpocodet0d0</p>
      </div>
    </main>
    
    