<script>
//PAGINA DE LOGIN
    let email = "";
    let valido = false;

    let password = "";
    

    function submit() {
        console.log("Email:", email);
        console.log("Password:", password); 
    }

    function validacionEmail() {
        const regex = /^[\w-.]+@[\w-]+\.[a-z]{2,7}$/i;
        if (regex.test(email)) {
            valido = true;
        } else {
            valido = false;
        }
    }
</script>

<div class="container">

<link rel="stylesheet" href="css/stylesLogin.css">


<div class="email-contenedor">
    <input type="email" bind:value={email} on:input={validacionEmail} placeholder="Email">
    <span class="estadoEmail">{valido ? 'Email ✅' : 'Email ❌'}</span>
</div>
    <input type="password" bind:value={password} placeholder="Password"><br>

    <button class="primary" on:click={submit}>Login</button>
</div>