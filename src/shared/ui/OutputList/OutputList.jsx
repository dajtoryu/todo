import React from "react";
import {Output} from "../Output/Output";
import {Button} from "@/shared/ui/Button/Button";
import styles from "./OutputList.module.css";

export const OutputList = ({todos, buttons})=>{
    
    return (
        <>
          
          

            {todos && todos.map((el)=>{
            return (
              <div className={styles.outputlist}>
                      <Output key={el.id.toString()} child={el.txt} complete={el.complete}/>
                      <Button onclick={()=>buttons.complete.onClick(el.id)} child={buttons.complete.child}/> 
                      <Button  onclick = {()=>buttons.del.onClick(el.id)} child={buttons.del.child}/>
                      
              </div>      
                    ) 
          })}
          

        </>
    )
}
