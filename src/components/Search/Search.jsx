import "./Search.scss"
import { useState } from 'react';
const Search = ({setSearchTerm}) => {
    const [newSearchTerm, setNewSearchTerm] =useState('')
    return ( 
        <form onSubmit={(e)=>{
           e.preventDefault();
           if(!e.target.value){
            setSearchTerm(newSearchTerm)
           }
        }}>
            <input type="text" onChange={(e)=>{
                setNewSearchTerm(e.target.value)
            }} placeholder="seach here..."  alt="search for movies" />
        </form>
     );
}
 
export default Search;