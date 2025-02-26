

// const Home = ({data,main}) => {
  
//   return (
//      <div>{data}{main}</div>
   
//   )
// }

// export default Home

// import React from 'react'
// import './App.css'
// import { Link } from 'react-router-dom'

// const Home = () => {
//   return (
//     <div>
//        <nav id='nav'>
//         <Link>
//         <li>Home</li></Link>
//        <Link to={'/'}>
//        <li>About</li></Link> 
//         <Link to={'/contact'}>
//         <li>Contact</li></Link>
//         <Link to={'/signup'}>
//         <li>SignUp</li></Link>
//       </nav>
//     </div>
//   )
// }

// export default Home

// import React,{useContext} from 'react'
// import {Context} from './Context'
// const Home = () => {
//  // let user=useContext(Context) --> define as variable
  
//  let {user}=useContext(Context) //for object
//   return (
//     <div>{user}</div>
//   )
// }

// export default Home


// import React from 'react'
// import Customhook from './Customhook'

// const Home = () => {
//   let {increment,d,r,count}=Customhook()
//   return (
//     <div>
//        <button onClick={increment}>+</button>
//        <button onClick={d}>-</button>
//        <button onClick={r}>reset</button>

//     </div>
//   )
// }

// export default Home

import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
       <nav id='nav'>
        <Link>
        <li>Home</li></Link>
       <Link to={'/'}>
       <li>About</li></Link> 
        <Link to={'/contact'}>
        <li>Contact</li></Link>
        <Link to={'/signup'}>
        <li>SignUp</li></Link>
      </nav>
    </div>
  )
}
export default Home
import React from 'react'
impo

const Home = () => {
  return (
    <div>

    </div>
  )
}

export default Home