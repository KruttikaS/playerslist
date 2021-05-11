import React, { useState } from 'react';
import {Input} from '@material-ui/core';
const Search = (props) => {
    const [term, setTerm] = useState('');
    
    const onInputChange = (event) => {
      setTerm(event.target.value);
    }

    const onSubmit = (event) => {
      event.preventDefault();
      props.onSubmit(term);
      setTerm("");
    }
  
  
  return(
    <div style={{textAlign:'center', marginTop:'40px'}}>
      <form onSubmit={onSubmit}>
       <div>
         <label style={{fontSize:'30px', marginRight:'10px'}}>Enter Player name</label>
         <Input style={{height:'35px',width:'500px'}} type="text" value={term} onChange={onInputChange} />
         <button style={{backgroundColor:'#f7a440', fontSize:'20px', marginLeft:'15px', borderRadius:'40px', padding:'10px 20px'}}>Submit</button>
       </div>
      </form>
    </div>
  )
  }
export default Search;