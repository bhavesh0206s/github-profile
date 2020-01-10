import React from 'react';


const SearchBox = ({search})=>{
    return(
       <div>
           <form>
               <input type="text" onChange={search}/>
           </form>
       </div> 
    );
}

export default SearchBox;