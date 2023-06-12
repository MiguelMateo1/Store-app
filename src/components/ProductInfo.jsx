import { useRef, useState } from 'react';
import product from '../assets/shoes/shoe1.png';
import './ProductInfo.css';
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";

function ProductInfo () {
    const imgRef = useRef(null);
    const scrollRef = useRef(0);
    const [pix, setPix] = useState(null)

    console.log(pix)

    const onScroll = () => {
        let scrollPixel = scrollRef.current.scrollTop / 2.5
        setPix(() => scrollPixel <= 90 ? scrollPixel : 90)
        // let rotate = {transform: `rotate(${pix}deg)`}
        // console.log(rotate)
        return 
    }


    return (
    <section id='product-sec' ref={scrollRef}  onScroll={onScroll}>
     <h4 className='price-tag'>$50</h4>
     <i className='scroll-arrow'><FaAngleDoubleDown/></i>
        <div className='product-container'>
            <div className='main-img-area'>
                <div className='main-img-container' style={{width: pix == 90 && '55%'}}>
                    <img src={product} ref={imgRef} className='main-img'
                        style={{
                            transform: `rotate(${pix}deg)`,
                            marginTop: `${pix * 4}px`
                            // width: pix == 90 && '55%',
                            // top: pix == 90 && '5%'
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
    )
}

export default ProductInfo ;