//Custom Hook 
import React, { useState } from 'react'

const Customhook = () => {
 let [count,SetCount]=useState(0)
 let increment=()=>SetCount(count+1)
 let d=()=>SetCount(count-1)
 let r=()=>SetCount(0)
return{increment,d,r,count}
}

export default Customhook