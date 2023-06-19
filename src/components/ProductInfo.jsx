import { useEffect, useRef } from 'react';
import './ProductInfo.css';
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
import { useContext } from 'react';
import DataContext from '../context/DataContext';

function ProductInfo () {
    const { selectProduct, setPix, pix } = useContext(DataContext);

    const imgRef = useRef(null);
    const scrollRef = useRef(0);

    // get product info 
    const {name, price, color, imgMain, description } = selectProduct;

    // gets scroll on y axis to ratate shoe image when scrolling
    const onScroll = () => {
        let scrollPixel = scrollRef.current.scrollTop / 2.5
        setPix(() => scrollPixel <= 90 ? scrollPixel : 90)
        return 
    }

    // scrolls back to top when a dif product is selected
    useEffect(() => {
        scrollRef.current.scrollTop = 0;
    },[selectProduct]); 

    return (
    <>
    <section id='product-sec' style={{backgroundColor: `${color}`}} ref={scrollRef}  onScroll={onScroll}>
     <h4 className='price-tag'>{price}</h4>
     <i className='scroll-arrow'><FaAngleDoubleDown/></i>
        <div className='product-container' style={{backgroundColor: `${color}`}}>
            <div className='main-img-area'>
                <div className='main-img-container' style={{width: pix == 90 && '55%'}}>
                    <img src={imgMain} ref={imgRef} className='main-img'
                        style={{
                            transform: `rotate(${pix}deg)`,
                            marginTop: `${pix * 4}px`,
                            }}>
                    </img>
                </div>
            </div>
            <div className='product-desc'>
                <button className='size-btn'>us 9</button>
                <button className='add-bag-btn'>ADD TO BAG</button>
                <i className='up-arrow'><FaAngleDoubleUp/></i>
            </div>
        </div>
    </section>
    </>
    )
}

export default ProductInfo ;