function loopDePares(numero) {
    for (let i = 0; i <= 100; i++) {
        let suma = i + numero;
        if (suma % 2 === 0) {
            console.log("El número " + suma + " es par");
        }
    }
}

loopDePares(x);
  // En lugar de la x en la linea superior a este texto utilizar el número deseado.