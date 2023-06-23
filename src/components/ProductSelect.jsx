import './ProductSelect.css'
import { FaBoxOpen } from "react-icons/fa";
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import Sort from './Sort';

function ProductSelect() {
    const { productList, handleProductClick } = useContext(DataContext);

    // returns the current product list.. to be displayed in the product select area
    const items = productList.map(item => {
        return ( 
            <div key={item.key} data-index={item.key} className='product' 
                style={{backgroundImage: `url(${item.img})`}}>
                <h6 className='product-name'>{item.name}</h6>
            </div>
        )}
    );

  return (
    <section id='product-select'>
        <aside className='product-inv'>{productList.length}/
            <span>{productList.length}</span>
            <FaBoxOpen className='inv-icon'/></aside>
        <div className='select-container' onClick={handleProductClick}>
            {items}
        </div>
        <Sort />
    </section>
  )
}

export default ProductSelect;
