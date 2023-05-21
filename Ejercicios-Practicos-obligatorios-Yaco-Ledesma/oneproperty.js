function oneProperty(arreglo, property) {
    return arreglo.map(obj => ({ [property]: obj[property] }));
}
var arreglo = [
    { name: "Lucas", edad: 20 },
    { name: "Santi", edad: 22 },
    { name: "Annabella", edad: 21 },
    { name: "Daniel", edad: 30 },
    { name: "Alen", edad: 21 },
    { name: "Hailey", edad: 18 },
    { name: "Julian", edad: 24 },
    { name: "Mike", edad: 24 },
    { name: "Agata", edad: 26 },
    { name: "Dexter", edad: 26 },
    { name: "Kimberly", edad: 27 },
    { name: "Dexter", edad: 30 }

];

console.log(oneProperty(arreglo, "edad"));


console.log(oneProperty(arreglo, "name"));
