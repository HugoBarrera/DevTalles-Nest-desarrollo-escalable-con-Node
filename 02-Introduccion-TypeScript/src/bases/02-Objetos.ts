export const pokemonIds = [1, 20, 30, 40, 50];

pokemonIds.push(+'1'); // Forma rápida de cambiar un string a number.

console.log(pokemonIds);


// Definir estructura de un objeto con interface
interface Pokemon {
    id: number;
    name: string;
    age?: number; // Al colocar ? indicamos a TS que ese valor puede venir o no.
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    // age: 10,
}

export const charmander:Pokemon = {
    id: 2,
    name: 'Charmander',
    age: 10,
}

console.log(bulbasaur);
console.log(charmander);


// Crear un array de Pokemones: Se debe utilizar la misma estructura que venimos manejando e indicar que se trara de un array con [].
export const pokemons: Pokemon[] = [];
pokemons.push( bulbasaur, charmander );
console.log(pokemons);