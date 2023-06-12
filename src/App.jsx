import './App.css'
import Nav from './components/nav'
import ProductInfo from './components/ProductInfo'
import ProductSelect from './components/ProductSelect'

function App() {

  return (
    <main>
      <Nav />
      <ProductInfo />
      <ProductSelect />
      <section 
        // style={{height: "74vh", position: "sticky", background: "blue",
        // top: "0",
        // left: "0",
        // bottom: "0"}}
      >cart</section>
    </main>
  )
}

export default App
