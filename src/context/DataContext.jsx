import { createContext, useState, useEffect } from "react";
import { shoes, accessories } from "../products";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const [selectProduct, setSelectedProduct] = useState(shoes[0])
    const [productList, setProductList ] = useState(shoes)


    return (
        <DataContext.Provider value={{
            setProductList, productList, setSelectedProduct, selectProduct
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;