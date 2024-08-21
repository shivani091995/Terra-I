import React, { useContext, useState } from 'react'
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from '../context/CryptoContext';

const Search = () => {

    const [searchText, setSearchText] = useState("");
    let {getSearchResult} = useContext(CryptoContext);

    let handleInput = (e) => {
        e.preventDefault();

        let query = e.target.value;
       
        setSearchText(query);
        getSearchResult(query);
    }



  return (
  <>
    <form className='w-96 relative flex items-center ml-7 font-nunito'>
    <input type='text' name='search' 
    className='w-full rounded bg-gray-200' placeholder='Search Here'
    onChange={handleInput}
    value={searchText}/>
    <button type='submit' className='absolute right-1 cursor-pointer'>
        <img src={searchIcon} alt='search' className='w-full h-auto'/>

    </button>
   </form>
   {
    searchText.length > 0 ?
    <ul className='absolute top-11 right-0 w-full h-96 rounded
     overflow-x-hidden py-2 bg-gray-200 bg-opacity-55 backdrop-blur-md'>
        <li>Bitcoin</li>
        <li>Ethereum</li>
    </ul>
    : null
   }
  </>
  )
}

export default Search