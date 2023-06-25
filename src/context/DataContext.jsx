import { createContext, useState } from "react";
import { shoes, accessories } from "../products";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const [selectProduct, setSelectedProduct] = useState(shoes[0]);
    const [productList, setProductList ] = useState(shoes);
    const [currentList, setCurrentList] = useState(shoes)
    const [cart, setCart] = useState([]);

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
        if (cart.includes(selectProduct)) {
            return
        } else {
        setCart((prev) => {
            return [...prev, selectProduct]
        })
        }
    };

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