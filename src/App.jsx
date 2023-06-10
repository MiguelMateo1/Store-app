import { useState } from 'react'
import './App.css'
import Nav from './components/nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Nav />
      <section>shoe</section>
      <section>select</section>
      <section>cart</section>
    </main>
  )
}

export default App
