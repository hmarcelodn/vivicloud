const reverseNumber = (num) => num.toString().split('').reverse().join('');

const findLargestPalindromAscendingGeneration = (lowerBoundary, upperBoundary) => {
    console.log(lowerBoundary, upperBoundary);
    let loops = 0;
    let lastPalindrom = 0;

    const currentString = lowerBoundary.toString();
    const digits = currentString.split('').length;
    const middleIndex = Math.floor(digits / 2);

        // Generamos la mitad del número que vamos a usar
    let rightHalf = digits % 2 === 0
        ? parseInt(currentString.slice(0, middleIndex))   // Para un número de longitud par, tomamos la mitad exacta.
        : parseInt(currentString.slice(0, middleIndex + 1)); // Para un número impar, tomamos la mitad + 1.


    // Generación del palíndromo y verificación dentro del rango
    while (rightHalf < upperBoundary) {
        const rightHalfReversed = reverseNumber(rightHalf);
        
        // Generar el palíndromo completo
        const newPalindrom = Number(rightHalf.toString() + rightHalfReversed.slice(digits % 2));

        console.log("Generando palíndromo: ", newPalindrom);

        // Verificar si el palíndromo está dentro del rango y es mayor al anterior encontrado
        if (newPalindrom >= lowerBoundary && newPalindrom < upperBoundary) {
            lastPalindrom = newPalindrom;
        }

        // Incrementamos la mitad para continuar generando palíndromos mayores
        rightHalf++;
        loops++;
    }

    return { palindrom: lastPalindrom, loops };
};

// Prueba con el rango 1-300
console.log(findLargestPalindromAscendingGeneration(99, 300)); 
