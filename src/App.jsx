import './App.css'
import BagBar from './components/Sidebars/BagBar'
import Nav from './components/Sidebars/Nav'
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
