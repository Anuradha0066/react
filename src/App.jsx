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



// import React ,{useState} from 'react'

// const App = () => {

//   let [input,SetInput]= useState()
//   let[data,Setdata]=useState([])
//   // let[dele,Setdele]=useState()

//     function fun1(e){
//     console.log('heheh')
//     SetInput(e.target.value)
//   }
//   function done(){
//     Setdata([...data,input])
//     SetInput('')
//   }


  // function dele(id){
  //   let newA= data.filter((val,index)=>{
  //     return index!==id
  //   })
  //   Setdata(newA)
  // }
  // return (
  //   <div>
  //     {/* <h3>{data}</h3> */}
  //     {
//         data.map((a,i)=>{
//           return(<div>
//             <li>{a}</li>
//             <button onClick={()=>dele(i)}>delete</button>
//             </div>)
//         })
//       }
     
//  <input type='text'onChange={fun1} placeholder='Enter input'></input>
//  <button onClick={done}>add</button>

//     </div>
//   )
// }

// export default App

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

//  import React, { useEffect, useState } from 'react'
 
//  const App = () => {
//   let [count,SetCount]=useState(0)
//   let [city,SetCity]= useState('delhi')
  
//   useEffect(()=>{
//     fetch('https://dummyjson.com/recipes').then((res)=>{
//       return res.json()
//     }).then((data)=>{
//       console.log(data)
//     })
//   },[count])
//    return (
//      <div>
//       <h2>{city}</h2>
//       <button onClick={()=>{SetCount(count+1)}} >click:{count}</button>
//       <button onClick={()=>SetCity('bhopal')}>city:{city}</button>
//      </div>
//    )
//  }
 
//  export default App



// import React,{useState,useEffect} from 'react'
// import './App.css'

// const App = () => {
// let[Apidata,SetApi]= useState([])

// function dele(id){
//   let newA= Apidata.filter((val,index)=>{
//     return index!==id
//   })
//   SetApi(newA)
// }

// useEffect(()=>{
//   fetch('https://dummyjson.com/recipes').then((res)=>{
//     return res.json()
//  }).then((data)=>{
//   console.log(data.recipes)
//   SetApi(data.recipes)
//  })
// },[])
//   return (
//     <div id='card'>
//        {
//         Apidata.map((val,index)=>{
//           return(
//             <>
//         <img src={val.image}></img>
       
//          <p>{val.name}</p>
//          <button onClick={()=>dele(index)}>delete</button>
//         </>
//         )
//         })}
//      </div>
//   )
// }

// export default App

// // // *****props ****
// // // import React from 'react'
// // // import Home from './Home'

// // const App = ({main}) => {
// //   let user='helloo'
// //   return (
// //     <div>
// //       <Home data={user} main={main}/>
// //     </div>
// //   )
// // }

// // export default App

// // import React, { useReducer } from 'react'

// // export const App = () => {
// //   function reducer(count,action){
// //     if(action.type=='incre'){
// //       return count+1
// //     }
// //     else if(action.type=='d'){
// //       return count-1
// //     }
// //     else if(action.type==='r'){
// //       return 0
// //     }
// //   }
// //   let[count,dispatch]= useReducer(reducer,0)
// //   function fun1(){
// //     dispatch({
// //       type:'incre'
// //     })
// //   }
// //   return (
// //     <div> 
// //       <h2>{count}</h2>
// //       <button onClick={fun1}>Incre</button>
// //       <button onClick={()=>dispatch ({type:'d'})}>D</button>
// //       <button onClick={()=>dispatch({type:'r'})}>reset</button>
// //     </div>
// //   )
// // }
// // export default App



// // *****React Router Dom******
// // import React from 'react'
// // import Home from './Home'
// // import{Route,Routes}from 'react-router-dom'
// // import About from './About'
// // import SignUp from './SignUp'
// // import Contact from './Contact'
// // const App = () => {
// //   return (
// //     <div>
// //      <Home/>
// //       <Routes>
// //         <Route path='/' element={<About/>}/>
// //         <Route path='/signup' element={<SignUp/>}/>
// //         <Route path='/contact' element={<Contact/>}/>

// //       </Routes>
// //     </div>
// //   )
// // }

// // export default App



// // import React, { useState } from 'react'

// // const App = () => {
// //   let [input,SetInput]=useState()
// //  let [data,Setdata]=useState([])
// //   let a=[]
// //   function d(){
// //     for(let i=1;i<input;i++)
// //       a.push(i)
// //   }
// //   Setdata(a)
// //   return (
// //     <div>
// //       {
// //        data.map((d)=>{
// //           return (<>
// //           <li>{d}</li>
// //           </>)
// //        })
// //       }
// //       <input type='text' onChange={(e)=>SetInput(e.target.value)}placeholder='enter a number'></input>
// //       <button onClick={d}>submit</button>
// //     </div>
// //   )
// // }

// // export default App

// import { useState } from "react";
// const App= () =>{
//   let [color,SetColor]=useState('')


//   function fun1(){
//     if(color){
//     SetColor(red)
//   }
//   else{
//     SetColor(black)
//   }
    
//   }
//   return(
//     <div style={{height:'100vh'}}>
//       <input type="text" onChange={fun1}/>
//     </div>
//   )
// }
// export default App

// import React,{useState} from 'react'
// import Todo from './Todo'
// import Edit from './Edit'
// import { Route,Routes } from 'react-router-dom'
// const App = () => {
//   let [todo,setTodo]=useState([])

//   return (
//     <div
//     {/* <Todo></Todo> */}
//     <Routes>
//       <Route path='/' element={<Todo todo={todo} setTodo={setTodo} />}></Route>
//       <Route path='/edit/:id' element={<Edit todo={todo} setTodo={setTodo} />}/>
//     </Routes>
//     </div>
//   )
//  }

//  export default App



 //******props drilling- unnecessary data transfer between many layers
 //ContextApi-for simple
 //redux - for complicated and large data
 //both used to solve props drilling

//  import React from 'react'
//  import Home from './Home'
//  const App = () => {
//    return (
//      <div>
//       <Home/>
//      </div>
//    )
//  }
 
//  export default App

// import React,{useState} from 'react'
// import Todo from './Todo'
// // import Edit from './Edit'

// const App = () => {

//   return (
//     <div>
//       <Todo/>
//       {/* <Edit/> */}
//     </div>
//   )
// }

// export default App
// import React, { useEffect } from 'react'
// import Home from './Home'
// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }

// export default App




// useEffect lifecycle
// virtual dom
// react fibre



// *****UseMemo- for optimization*/
// import React ,{useMemo,useState}from 'react'

// const App = () => {
//   let[count,SetCount]=useState(0)

//   const Calculation=(num) =>{
//     for(let i=0;i<10000000;i++){
//       num +=1;
//     }
//     return num;
//   }
//   let data=useMemo(()=>{
//     return Calculation(0)
//   },[])
//   console.log(data,'data')
//   return (
//     <div>
//       <h4>{data}</h4>  
//       <h2>{count}</h2>
//       <button onClick={()=>{SetCount(count+1)}}>add</button>
//       </div>
//   )
// }
// // 
// export default App


// import React ,{useState}from 'react'

// const App = () => {
//   let [count,SetCount]=useState(0)

//   function sum(){
// const Calculation=(num)=>{
//   for(let i=0;i<1000000;i++){
//   num +=1
//   }
//   return num
//  }}
//  console.log(sum());
 
//  let data=(()=>{
//   return Calculation(0)
//  },[])
//  console.log(data,'data')
//   return (
//     <div>
//       <h3>{data}</h3>
//      <h4>{count}</h4>
//      <button onClick={()=>{SetCount(count+1)}}>add</button>
//     </div>
//   )
// }

// export default App

// import React, { useState, useEffect } from 'react';

// const App = () => {
//   let [count, setCount] = useState(0);
//   let [data, setData] = useState(null);

//   useEffect(() => {
//     // This will run only once when the component mounts
//     const Calculation = (num) => {
//       for (let i = 0; i < 1000000000; i++) {
//         num += 1;
//       }
//       return num;
//     };
    
//     const result = Calculation(0);
//     setData(result);  // Set the result to state
//   });  // Empty array ensures this effect runs only once

//   return (
//     <div>
//       <h3>{data}</h3>
//       <h4>{count}</h4>
//       <button onClick={() => setCount(count + 1)}>Add</button>
//     </div>
//   );
// };

// export default App;

// import React, { useContext, useState } from 'react'

// const App = () => {
//   return (
//     <div>
//      <Todo/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Login from './Login'
// import Submit from './Submit'

// import{Route,Routes} from 'react-router-dom'
// const App = () => {
//   return (
//     <div>
//       {/* <Login/> */}
//       <Routes>
//       <Route path='/' element={<Login/>}/>
//        <Route path='/submit' element={<Submit/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App


import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  let [input,SetInput]=useState('')
  let [count,SetCount]=useState()
    let  data=      useRef(0)
  useEffect(()=>{
    // SetCount(count+1)
    data.current=data.current+1
  })
  return (
    <div>
      <h3>{data.current}</h3>
      <input   type='text'  onChange={(e)=>SetInput(e.target.value)}/>
    </div>
  )
}

export default App