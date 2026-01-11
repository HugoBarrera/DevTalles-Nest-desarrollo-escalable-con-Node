export let name: string = 'Fernando';
export const edad: number = 36;
export const isValid: boolean = true;

name = 'Melissa';
// name = 123; Arroja error porque el tipo de dato es diferente
// name = true; Arroja error porque el tipo de dato es diferente

export const templateString = `Esto es un string
multilinea
que puedes tener
" dobles
' simples
inyectar valores ${name}
expresiones ${ 1 + 1 }
números ${edad}
booleanos ${isValid}
`;

console.log(templateString);
console.log(templateString.length); // templateString es un string, por lo que podemos hacer uso de todas las propiedades de manipulación.