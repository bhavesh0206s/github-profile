import React from 'react';
import './search.css'

const SearchBox = ({search, submit})=>{
    return(
       <div className="form">
           <form onSubmit={submit}>
                <label>
                    <input 
                        id="search-field"
                        type="text" 
                        placeholder="Enter GitHub Username"
                        onChange={search}
                    />
                </label>
               <input id="submit-btn" type="submit" value="Submit"/>
           </form>
       </div> 
    );
}

export default SearchBox;