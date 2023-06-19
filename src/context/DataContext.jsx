import { createContext, useState, useEffect } from "react";
import { shoes, accessories } from "../products";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const [selectProduct, setSelectedProduct] = useState(shoes[0])
    const [productList, setProductList ] = useState(shoes)

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


    return (
        <DataContext.Provider value={{
            setProductList, productList, setSelectedProduct,
            setPix, pix,
            selectProduct, handleProductClick
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;