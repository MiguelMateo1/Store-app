import './BagBar.css'
import { FaShoppingCart } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function BagBar() {
  return (
    <section id='sidebar'>
      {/* <img src={navImg} alt="navigation-imgage" className="nav-img"></img> */}
        <div className="cart-toggle"><FaShoppingCart/></div>
        <aside className="checkout">
            <a>checkout</a>
        </aside>
      <aside className='cart'>
          <div className='cart-item' ></div>
          <div className='product' style={{backgroundColor: '#f8c6ff'}}></div>
          <div className='product' ></div>
          <div className='product' style={{backgroundColor: '#f8c6ff'}}></div>
      </aside>
      <aside className='contact-side'>
        <div className='contact-icon'>
          <FaEnvelope />
        </div>
      </aside>

    </section>
  )
}

export default BagBar;
