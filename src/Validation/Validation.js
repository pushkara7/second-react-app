import React from 'react';

const validation = (props) =>{
	let validationText = null;
	if(props.length >10){
		validationText = "Text too long.";
	}else if(props.length > 0){
		validationText = "Text too short.";
	}
return(
	//<div>{props.length > 5 ? <p>Text too long.</p>:<p>Text too short.</p>}</div>
   <div>{validationText}</div>  
	)
}
    
	
export default validation;