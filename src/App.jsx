import './App.css'
import BagBar from './components/BagBar'
import Nav from './components/nav'
import ProductInfo from './components/ProductInfo'
import ProductSelect from './components/ProductSelect'

function App() {

  return (
    <main>
      <Nav />
      <ProductInfo />
      <ProductSelect />
      <BagBar />
    </main>
  )
}

export default App
