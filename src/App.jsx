import './App.css'
import CheckoutBar from './components/Sidebars/CheckoutBar'
import Nav from './components/Sidebars/Nav'
import ProductInfo from './components/ProductInfo'
import ProductSelect from './components/ProductSelect'
import { DataProvider } from './context/DataContext'

function App() {

  return (
    <main>
      <DataProvider>
        <Nav />
        <ProductInfo />
        <ProductSelect />
        <CheckoutBar />
      </DataProvider>
    </main>
  )
}

export default App
