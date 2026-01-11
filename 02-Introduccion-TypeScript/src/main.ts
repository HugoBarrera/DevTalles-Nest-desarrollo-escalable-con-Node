import { name, edad } from './bases/01-types'
import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hello ${name} y tengo ${edad} años</h1>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
