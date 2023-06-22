import './App.css'
import CheckoutBar from './components/Sidebars/CheckoutBar'
import Nav from './components/Sidebars/Nav'
import ProductInfo from './components/ProductInfo'
import ProductSelect from './components/ProductSelect'
import { DataProvider } from './context/DataContext'
import { useEffect } from 'react'
import clickIcon from './assets/bg-click.png'

function App() {
  // backgourn colors
  const bgColors = ['#e7be34','#555552','#a4bbb5', '#e0ded7'];
  let num = 0;
  
  // changes bg color when click on backgound
  const handleClickColor = (e) => {
    if (num == bgColors.length) {
      num = 0;
    };

    if (e.srcElement.id == 'bg') {
    document.body.style.backgroundColor = bgColors[num];
    num += 1;
    };
  }

  useEffect(() => {
    document.body.addEventListener('click', handleClickColor)
  }, []);

  return (
    <>
    <img src={clickIcon} className='click-icon' disable/>
      <main>
        <DataProvider>
          <Nav />
          <ProductInfo />
          <ProductSelect />
          <CheckoutBar />
        </DataProvider>
      </main>
    </>
  )
}

export default App
