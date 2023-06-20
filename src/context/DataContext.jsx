import { createContext, useState, useEffect } from "react";
import { shoes, accessories } from "../products";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const [selectProduct, setSelectedProduct] = useState(shoes[0]);
    const [productList, setProductList ] = useState(shoes);
    const [cart, setCart] = useState([]);

    // use in ProductInfo component
    const [pix, setPix] = useState(null)

    // gets the selected product and and updates
    // selectProduct state -- use in ProductSelect component
    const handleProductClick = (e) => {
        if (selectProduct != selectProduct) {
            setPix(0)
        }
        const key = (e.target.getAttribute('data-index'));
        setSelectedProduct(shoes[key - 1])
    }

    // add to bag onClick
    const addToBagClick = () => {
        setCart((prev) => {
            return [...prev, selectProduct]
        })
    }

    useEffect(() => {
        console.log(cart)
    },[cart]); 


    return (
        <DataContext.Provider value={{
            setProductList, productList, setSelectedProduct,
            setPix, pix,
            selectProduct, handleProductClick, cart, setCart, addToBagClick
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;