import React from 'react';



const SearchBox = ({ Searchfeild , SearchChange }) => {
	return (
    <div className='pa2'>
    <input 
    className='pa3 ba b--green bg-lightest-blue'
    type='search' 
    placeholder='search robots' 
    onChange={SearchChange}
    /> 
   </div>
 );
}


export default SearchBox;