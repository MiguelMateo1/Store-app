import './ProductSelect.css'
import { FaSortAmountDown } from "react-icons/fa";
import { useContext, useEffect, useState } from 'react';
import DataContext from '../context/DataContext';

function Sort({container}) {
    const { productList, setProductList, currentList } = useContext(DataContext);
    const [ sort, setSort ] = useState('featured')

    // handles products to display when click on 'new' or 'all' category
    const handleCategoryClick = (e) => {
        const target = e.target.classList;

        if (target.contains('new')) {
            let list = productList.filter( x => x.category);

            target.add('active');
            e.target.nextSibling.classList.remove('active');
            setProductList(list);
        }

        if (target.contains('all')) {
            target.add('active');
            e.target.previousSibling.classList.remove('active');
            setProductList(currentList);
        }
    };

    // function to sort items when click on the sort options
    const handleSortClick = (e) => {
        const newBtn = document.querySelector('.new');
        const allBtn = document.querySelector('.all');
        let list;

        const value = e.target.value;
        if (value != sort) {
            // sets product list to initial order
          if (value == 'featured') {
            newBtn.classList.remove('active');
            allBtn.classList.add('active');
            setProductList(currentList.sort((a, b) => a.key - b.key));
          }
          // product order set to price low-high
          // note* using .slice so the productList can re-render
          if (value == "low-high") {
            list = productList.slice().sort((a, b) => a.price - b.price)
            setProductList(list);
          }
          // product order set to price high-low
          if (value == "high-low") {
            list = productList.slice().sort((a, b) => b.price - a.price)
            setProductList(list);
          }
          setSort(value)
        }
    };

    useEffect(() => {
      container.current.scrollLeft = 0;
      container.current.scrollTop = 0;
    },[productList])

  return (
        <div className='select-options'>
            <article className='sort'>
                <h5>sort
                <span></span><FaSortAmountDown className='sort-icon'/></h5>
                 <select id="sort" onClick={handleSortClick}>
                  <option value="featured">-Featured-</option>
                  <option value="low-high">Low-High</option>
                  <option value="high-low">High-Low</option>
                </select>
            </article>
            <article className='category' onClick={handleCategoryClick}>
                <h5 className='new'>New</h5>
                <h5 className='all active'>All</h5>
            </article>
        </div>
  )
}

export default Sort;