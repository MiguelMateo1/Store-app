import './ProductSelect.css'
import { FaBoxOpen } from "react-icons/fa";
import { useContext,useRef } from 'react';
import DataContext from '../context/DataContext';
import Sort from './Sort';

function ProductSelect() {
    const { productList, handleProductClick } = useContext(DataContext);
    const containerRef = useRef(null)

    // returns the current product list.. to be displayed in the product select area
    const items = productList.map(item => {
        return ( 
            <div key={item.key} data-index={item.key} className='product' 
                style={{backgroundImage: `url(${item.img})`}}>
            </div>
        )}
    );

  return (
    <section id='product-select'>
        <aside className='product-inv'>{productList.length}/
            <span>{productList.length}</span>
            <FaBoxOpen className='inv-icon'/>
            </aside>
        <div  ref={containerRef} className='select-container' onClick={handleProductClick}>
            {items}
        </div>
        <Sort container={containerRef}/>
    </section>
  )
}

export default ProductSelect;
