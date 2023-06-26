import { createContext, useEffect, useState } from "react";
import { shoes, accessories } from "../products";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const [selectProduct, setSelectedProduct] = useState(shoes[0]);
    const [productList, setProductList ] = useState(shoes);
    const [currentList, setCurrentList] = useState(shoes)
    const [cart, setCart] = useState(setSavedCart);

    // updates cart state with products user added to cart using locarStorage
    function setSavedCart () {
        const cartData = localStorage.getItem('cart');
            return cartData ? JSON.parse(cartData) : [];
    }

    // use in ProductInfo component to set window scroll to 0
    const [pixel, setPixel] = useState(null)

    // gets the selected product and updates
    // selectProduct state -- use in ProductSelect component
    const handleProductClick = (e) => {
        if (selectProduct != selectProduct) {
            setPixel(0)
        }

        // returns if no valid product is clicked, else
        // updates the selected shoe
        const key = (e.target.getAttribute('data-index'));
        if (!key) {
            return
        } else {
            // gets index of select product
            const productToDisplay = productList.findIndex(i => i.key == key);
            setSelectedProduct(productList[productToDisplay])
        }
    };

    // add to bag onClick
    const addToBagClick = () => {
        // checks is product is alrady in cart
        if (cart.find(item => item.key == selectProduct.key)) {
            return
        } else {
            // updates cart
        setCart((prev) => {
            return [...prev, selectProduct]
        })
        }
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));  
    },[cart]);

    return (
        <DataContext.Provider value={{
            setProductList, productList, setSelectedProduct,
            pixel, selectProduct, handleProductClick, cart,
            setCart, addToBagClick, currentList, setCurrentList
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;