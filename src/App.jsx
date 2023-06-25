import './App.css'
// components import
import CheckoutBar from './components/Sidebars/CheckoutBar'
import Nav from './components/Sidebars/Nav'
import ProductInfo from './components/ProductInfo'
import ProductSelect from './components/ProductSelect'
import Contact from './components/Contact'
import About from './About'
// react
import { DataProvider } from './context/DataContext'
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// others
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
      <Router>
      <img src={clickIcon} className='click-icon' disable/>
        <main>
          <DataProvider>
            <Nav />
            
            <Routes>
              <Route path='/' element={[
                <ProductInfo />,<ProductSelect />
                ]}>
              </Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/about' element={<About />}></Route>
            </Routes>

            <CheckoutBar />
          </DataProvider>
        </main>
      </Router>
    </>
  )
}

export default App
