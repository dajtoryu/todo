import React from "react";


export  const Output=({child,complete})=>{

    return(
        <>
        {complete  && <p className="output" style={{backgroundColor:'inherit'}}><s>{child}</s></p>}
        {!complete && <p className="output">{child}</p>}
        </>
    )
    

    
}