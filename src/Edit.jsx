import React, { useEffect, useState } from 'react'
import {useNavigate,useParams}from 'react-router-dom'

const Edit = ({todo,setTodo}) => {
  let navi=useNavigate()
    let {id} = useParams ()
    let newId= Number(id)
    let newData= todo.filter((a,index)=>{
           return index==id
    })
    let [input,SetInput]=useState(newData)

    // useEffect(()=>{
    //   Setnewtodo(newData)
    // },[])

    function fun1(){
      let arr=[...todo]
      arr[newId]=input
      setTodo(arr)
      navi('/')
    }
  return (
    <div>
        <fieldset>
            <legend>edit</legend>
           
                <input type='text'name='input' onChange={(e)=>SetInput(e.target.value)} value={input} placeholder='enter edit'></input>
                <button onClick={fun1}>save</button>
            
        </fieldset>
    </div>
  )
}

export default Edit