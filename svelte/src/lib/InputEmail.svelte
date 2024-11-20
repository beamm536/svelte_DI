<script>
    let email;
    let isValid = false;

    function validateEmail() {
        const  regex = /^[\w-.]+@[\w-]+.[a-z]{2,7}$/i;
        isValid = regex.test(email);
    }
</script>

<div class="contenedorInput">
    <p>Input Validation</p>
    <input type="email" bind:value={email} on:input={validateEmail}>
    <p>{isValid ? 'Email Valido' : 'Email Invalido'}</p>
</div>

