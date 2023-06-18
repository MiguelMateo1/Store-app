import './ProductSelect.css'
import { FaSortAmountDown } from "react-icons/fa";
import { useContext } from 'react';
import DataContext from '../context/DataContext';

function ProductSelect() {
    const { setProductList, productList } = useContext(DataContext);

    // returns the current product list.. to be displayed in the product select area
    const items = productList.map(item => {
        return ( 
            <div key={item.key} className='product' style={{backgroundColor: '#92bdbd', backgroundImage: `url(${item.img})`}}>
                <h6 className='product-name'>{item.name}</h6>
            </div>
        )}
    );


  return (
    <section id='product-select'>
        <aside className='product-inv'>{productList.length}</aside>
        <div className='select-container'>
            {items}
        </div>

        <div className='select-options'>
            <article className='sort'>
                <h5>sort<span><FaSortAmountDown/></span></h5>
            </article>
            <article className='category'>
                <h5 className='new active'>New</h5>
                <h5 className='popular'>Popular</h5>
            </article>
        </div>
    </section>
  )
}

export default ProductSelect;
