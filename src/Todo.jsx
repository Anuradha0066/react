// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Context } from './Context'

// <Context.Provider value='todo'
// const Todo=()=> {
// // const Todo = ({todo,setTodo,newTodo}) => {
//   let Navigate= useNavigate()
//   let [input,SetInput]=useState()
//   let [todo,setTodo]=useState([])

// //   let [data,Setdata]=useState([])

// console.log(todo,"fghjk")

//   function edit(id){
//     Navigate(`/edit/${id}`)
//   }
  

//   return (
//     <div>
//       {
//         todo.map((a,index)=>{
//           return(
//             <div>
//               <h3>{a}</h3>
//               <button onClick={()=>edit(index)}>Edit</button>
//             </div>
//           )
//         })  }
//    <input type='text' onChange={(e)=>SetInput(e.target.value)} placeholder='enter your work'></input>
//    <button onClick={()=>setTodo([...todo,input])}>add</button>
//     </div>
//   )
// }

// export default Todo

import React, { useContext, useState } from 'react'
import {Context} from './Context'
const Todo = () => {
  let[input,SetInput]=useState('')
  let{todo,SetTodo}= useContext(Context)

function done(){
  SetTodo([...todo,input])
}
  return (
    <div>
<input type="text" name='' onChange={(e)=>SetInput(e.target.value)}></input>
<button onClick={done} >add</button>
    </div>
  )
}

export default Todo