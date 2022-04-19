import './style.css'
import { a } from '../../src/main'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>${a}
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
