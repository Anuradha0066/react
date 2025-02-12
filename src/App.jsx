// //functional based
// //object based


// // const App = () => {
// //   return (
// //     <div>
// //       <h1>hii</h1>
// //       <h3>hello</h3>
// //     </div>
    
// //   )
// // }

// // export default App


// // import React from 'react'

// // const App = () => {
// //   let user='anu'
// //   return (
// //     <div>
// //       <h1>{user}</h1>
// //     </div>
// //   )
// // }

// // export default App


// // const App=()=>{
// //   let arr=[1,2,3,4,5,6]
// //   // function add(){
// //   //     console.log('hello')
// //   // }
// //   return(
// //       <div style={{backgroundColor:'red'}}>
// //      {/* {<button></button>} */}
// //           {
// //               arr.map((a)=>{
// //                   return(<div>
// //                       <h2>{a}</h2>
// //                   </div>
// //                   )
// //           })
// //         }
// //       </div>
// //   )
// // }
// // export default App


// // import React from 'react'
// // // import Home from './Home'
// // import p from './Home'

// // const App = () => {
// //   return (
// //     <div>
// //       <p/>
// //     </div>
// //   )
// // }

// // export default App



// //functional => static  vs class=> dynamic
// // import { useState } from "react";
// // const App= () =>{
// //   let [count,SetCount]=useState(0)

// //   function fun1(){
// //     SetCount(count+1)
// //   }
// //   return(
// //     <div>
// //       <button onClick={fun1}>click:{count}</button>
// //     </div>
// //   )
// // }
// // export default App

// // import { useState } from "react";
// // const App= () =>{
// //   let [color,SetColor]=useState('black')


// //   function fun1(){
// //     if(color){
// //     SetColor(false)
// //   }
// //   else{
// //     SetColor(true)
// //   }
    
// //   }
// //   return(
// //     <div style={{backgroundColor:color?'black':"blue",height:'100vh'}}>
// //       <button onClick={fun1}>click:{color}</button>
// //     </div>
// //   )
// // }



// // export default App


// // import React ,{useState} from 'react'

// // const App = () => {

// //   let [input,SetInput]= useState()
// //   let[data,Setdata]=useState()

// //     function fun1(e){
// //     console.log('heheh')
// //     SetInput(e.target.value)
// //   }
// //   function done(){
// //     Setdata(input)
// //   }
// //   return (
// //     <div>
// //       <h3>{data}</h3>
// // <input type='text'onChange={fun1} placeholder='Enter input'></input>
// // <button onClick={done}>add</button>
// //     </div>
// //   )
// // }

// // export default App



// // import React ,{useState} from 'react'

// // const App = () => {

// //   let [input,SetInput]= useState()
// //   let[data,Setdata]=useState([])
// //   // let[dele,Setdele]=useState()

// //     function fun1(e){
// //     console.log('heheh')
// //     SetInput(e.target.value)
// //   }
// //   function done(){
// //     Setdata([...data,input])
// //     SetInput('')
// //   }


// //   function dele(id){
// //     let newA= data.filter((val,index)=>{
// //       return index!==id
// //     })
// //     Setdata(newA)
// //   }
// //   return (
// //     <div>
// //       {/* <h3>{data}</h3> */}
// //       {
// //         data.map((a,i)=>{
// //           return(<div>
// //             <li>{a}</li>
// //             <button onClick={()=>dele(i)}>delete</button>
// //             </div>)
// //         })
// //       }
     
// // <input type='text'onChange={fun1} placeholder='Enter input'></input>
// // <button onClick={done}>add</button>

// //     </div>
// //   )
// // }

// // export default App

// import React,{useState} from 'react'

// const App = () => {
//   let [input,SetInput]=useState({
//     name:"",
//     email:"",
//     password:""
//   })
//   function fun1(e){
//     let{name,value}=e.target
//     SetInput({...input,[name]:value})
//     console.log(input,"hello")
//   }
//   return (
//     <div>
//       <input type='text' name='name' value={input.name} onChange={fun1} placeholder='Enter your name'></input>
// <br>
// </br>
// <input type='text' name='email' value={input.email} onChange={fun1} placeholder='Enter your email'></input>
// <br/>
// <input type='text' name='password' value={input.password} onChange={fun1} placeholder='Enter your password'></input>
// <br/>
// <button>submit</button>
//  </div>
//   )
// }

// export default App


 //*********UseState ,UseEffect, ReactOuterDom****

 import React, { useEffect, useState } from 'react'
 
 const  = () => {
  let [count,SetCount]=useState(0)
  let 
  
  useEffect(()=>{
    fetch('https://dummyjson.com/recipes').then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data)
    })
  },[])
   return (
     <div>
      <h2>{city}</h2>
      <button onClick={count} >click{count+1}</button>
      <button onClick={city}>bhopal</button>
     </div>
   )
 }
 
 export default 