import { createContext, useState } from "react";

 export let Context=createContext()

 const ContextP =({children})=> {
    let [todo,SetTodo]=useState([])
    return(
        <Context.Provider value={({todo,SetTodo})}>
            {children}
        </Context.Provider>
    )
 }
 export default ContextP