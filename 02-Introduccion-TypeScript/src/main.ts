// import { name, edad } from './bases/01-TiposDatos.ts'
import { bulbasaur, charmander, pokemons } from './bases/02-Objetos.ts'
import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hello ${bulbasaur.name} y ${charmander.name}, ustedes corresponden a ${pokemons}</h1>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
