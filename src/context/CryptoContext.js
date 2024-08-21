import { createContext, useLayoutEffect, useState } from "react";

// Create context object
export const CryptoContext = createContext({});

// Create provider component
export const CryptoProvider = ({children}) => {
    const [cryptoData, setCryptoData] = useState();
    const [searchData, setSearchData] = useState();

    const fetchCryptoData = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
                // No need for an API key here
            }
        };
        
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d', options);
            const data = await response.json();
            console.log(data);
            setCryptoData(data);
        } catch (error) {
            console.error('Error fetching crypto data:', error);
        }
    };

    const getSearchResult = async (query) => {
        
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`);
            const data = await response.json();
            console.log(data);
            setSearchData(data);
        } catch (error) {
            console.error('Error fetching crypto data:', error);
        }
    };





    useLayoutEffect(() => {
        fetchCryptoData();
    }, []);

    return (
        <CryptoContext.Provider value={{cryptoData, searchData, getSearchResult}}>
            {children}
        </CryptoContext.Provider>
    );
};
