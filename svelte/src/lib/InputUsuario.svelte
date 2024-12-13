<script>
//PAGINA DE LOGIN
    let email = "";
    let validoEmail = false;

    let password = "";
    //let validaPass = false;
    
    function validacionPassword(password) {
        const regexP = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
        return regexP.test(password);
    }

    function submit() {
        console.log("Email:", email);
        console.log("Password:", password); 
    }

    function validacionEmail() {
        const regex = /^[\w-.]+@[\w-]+\.[a-z]{2,7}$/i;
        if (regex.test(email)) {
            validoEmail = true;
        } else {
            validoEmail = false;
        }
    }
</script>

<div class="container">

<link rel="stylesheet" href="css/stylesLogin.css">


<div class="email-contenedor">
    <input type="email" bind:value={email} on:input={validacionEmail} placeholder="Email">
    <span class="estadoEmail">{validoEmail ? '✅' : '❌'}</span>
</div>

<div class="password-contenedor">
    <input type="password" bind:value={password} placeholder="Password">
    <span class="estadoPassword">{validacionPassword(password) ? '✅' : '❌'}</span>
</div>
    

    <button class="primary" on:click={submit}>Login</button>
</div>