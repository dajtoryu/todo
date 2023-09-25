import React from "react";

export const Button = ({child,onclick})=>{
    return (
        <><button  onClick={onclick}>{child}</button> </>
    )
}