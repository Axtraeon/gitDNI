/*
- Pide DNI al usuario(Con letra)
- Comprueba la letra
- Da un alert diciendo si esta ok
- git, archivo index.html, js
- Commit, repo en github, git push
- Enviar: enlace a vuestro repositorio
*/

function pideDNI(){
    let DNI = prompt ("Introduce el DNI")
if (formatoNifValido(DNI)) {
    alert("DNI correcto");

    // Extraer los números y la letra del DNI
    let numeros = DNI.substring(0, DNI.length - 1);  // Los números
    let letraIntroducida = DNI.charAt(DNI.length - 1).toUpperCase();  // La letra (último carácter)

    let letraCalculada = calcularLetraDni(numeros);  // Calcular la letra usando los números

    if (letraIntroducida === letraCalculada) {
        alert("Letra correcta");
    } else {
        alert("Letra incorrecta");
    }
} else {
    alert("DNI incorrecto");
}
}

function formatoNifValido(DNI) {
    const regex = /^\d{1,8}[A-Za-z]$/;
    return regex.test(DNI);
    
  }

function calcularLetraDni(DNI) {
    let cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
    DNI = parseInt(DNI);
    let posicion = DNI % 23 ;
    return cadena[posicion];
  }

