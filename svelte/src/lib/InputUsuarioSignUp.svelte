<script>
</script>

<link rel="stylesheet" href="css/styleSignUp.css" />

<div class="contenedor-formulario">
  <div class="titulo-formulario">
    <h1>Formulario de Registro</h1>
  </div>

  <div class="formulario">
    <form>
      <label for="name">Nombre</label>
      <input type="text" id="nombre" placeholder="Ingresa tu nombre" />

      <label for="subname">Apellidos</label>
      <input type="text" id="apellido" placeholder="Ingresa tus apellidos" />

      <label for="email">Correo</label>
      <input type="email" id="correo" placeholder="Ingresa tu correo" />

      <label for="genero">Género</label>
      <select name="genero" id="genero">
        <option value="masc">Masculino</option>
        <option value="fem">Femenino</option>
        <option value="otro">Otro</option>
      </select>

      <button type="submit">Enviar Formulario</button>
    </form>
  </div>
</div>