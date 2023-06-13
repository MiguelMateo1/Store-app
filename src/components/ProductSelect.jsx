import './ProductSelect.css'
import { FaSortAmountDown } from "react-icons/fa";
// FaClipboardCheck
// FaBoxOpen
function ProductSelect() {


  return (
    <section id='product-select'>
        <aside className='product-inv'>6</aside>
        <div className='select-container'>
            <div className='product' style={{backgroundColor: '#92bdbd'}}>
                <h6 className='product-name'>nike chapter 1</h6>
            </div>
            <div className='product' style={{backgroundColor: '#e4e26b'}}></div>
            <div className='product' style={{backgroundColor: '#f8c6ff'}}></div>
            <div className='product' style={{backgroundColor: '#d0f7f8'}}></div>
            <div className='product' style={{backgroundColor: '#d2bbdd'}}></div>
            <div className='product' style={{backgroundColor: '#ffb491'}}></div>
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
