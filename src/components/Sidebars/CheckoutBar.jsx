import './CheckoutBar.css'
import { FaShoppingCart } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useContext } from 'react';
import DataContext from '../../context/DataContext';

function CheckoutBar() {
    const { cart, setCart } = useContext(DataContext);

    // delete from cart fucntion
    const deleteOnClick = (e) => {
       // gets seleted skill key
      const selected = e.currentTarget.parentElement.dataset.index
      // return item not mattching the selected skill key
      const index = cart.filter(x => x.key != selected)
      setCart(index)
    }

    // map through items in cart to display 
    const cartItems = cart.map( (item) => {
      return ( 
          <div key={item.key} data-index={item.key} className='cart-item'
               style={{backgroundColor: `${item.color}`, backgroundImage: `url(${item.img})`}}>
              <h6 className='cart-item-name'>{item.name}</h6>
              <FaTrash className='delete' onClick={deleteOnClick}/>
          </div>
      )}
  );

  return (
    <section id='sidebar'>
        <div className="cart-toggle" style={{
          color: cartItems[0] && '#9e8f39', fontSize: cartItems[0] && '20px'}} ><FaShoppingCart/></div>
        <aside className="checkout">
            <a>checkout</a>
        </aside>
      <aside className='cart'>
          {cartItems[0] ? cartItems : <h3 className='empty'>Empty Cart</h3>}
      </aside>
      <aside className='contact-side'>
        <div className='contact-icon'>
          <FaEnvelope />
        </div>
      </aside>
    </section>
  )
}

export default CheckoutBar;
