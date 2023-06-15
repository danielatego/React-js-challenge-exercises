import React from "react";
function Box(props){
   
    
    
    const styles ={
      backgroundColor:props.on ? "#000000":"#FFFFFF",
      color:"green"
    }
    return(
        <div onClick={props.fn} style= {styles} className='box'key={props.id}>
             {props.id}
        </div>
    )
    }
    export default Box;