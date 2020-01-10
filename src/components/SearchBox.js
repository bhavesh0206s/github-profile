import React from 'react';


const SearchBox = ({search, submit})=>{
    return(
       <div>
           <form onSubmit={submit}>
                <label htmlFor="">
                    <input 
                        type="text" 
                        placeholder="Enter GitHub Username"
                        onChange={search}
                    />
                </label>
               <input type="submit"/>
           </form>
       </div> 
    );
}

export default SearchBox;