<script>
    //aqui las importaciones
    import Counter from './Counter.svelte';
    import InputUsuario from './InputUsuario.svelte';
    
 
    import InputUsuarioSignUp from './InputUsuarioSignUp.svelte';
    </script>
    
    <main>
      <link rel="stylesheet" href="css/styles.css">
    
      
    
      <div class="viewContainer">
        <!-- <Counter /> -->
    
          <h1> </h1>
          <p class="signup">Sing-Up</p>
    
          <div class="form-container">
            
            <InputUsuarioSignUp />
    
            
            <p>Or signup with Google</p>
            <button class="secondary">Continue with Google</button>
    
            <p>Don't have an account? <a href="/">Signup</a></p>
          </div>
    
          <br>
          <p>Pruebas para el email: usuario.ejemplo@dominio.com</p>
          <p>Pruebas password: w3Unpocodet0d0</p>
      </div>
    </main>
    
    