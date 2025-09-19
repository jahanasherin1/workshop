import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = () => {
  var [input,setinput]=useState({Name:"",Age:"",Dept:"",Sal:""})
  var navigate=useNavigate()
  var location=useLocation()
  console.log(location.state)

  const inputHandler=(e)=>{
    setinput({...input,[e.target.name]:e.target.value})
    console.log(input)
  }

  const submitHandler=(e)=>{
    if(location.state !==null){
    axios.put("http://localhost:3004/update/"+location.state.val._id,input)
    .then((res)=>{
      alert(res.data) 
      navigate("/View")

    })
  }
  else{
    axios.post("http://localhost:3004/add",input)
    .then((res)=>{
      alert(res.data) 
      navigate("/View")

    })
  }
}

if(location.state !== null){
  useEffect(()=>{
    setinput({...input,
      Name:location.state.val.Name,
      Age:location.state.val.Age,
      Dept:location.state.val.Dept,
      Sal:location.state.val.Sal
    })
  },[])

}
  

  return (
    <div>
        <br /><br />
        <h2>Add Employee</h2>
        <br /><br />
        <TextField label="Name" variant="outlined" 
        name='Name'
        value={input.Name}
        onChange={inputHandler}/>
        <br /><br />

        <TextField label="Age" variant="outlined"  
        name='Age'
        value={input.Age}
        onChange={inputHandler}/>
        <br /><br />

        <TextField label="Department" variant="outlined"
        name='Dept'
        value={input.Dept}
        onChange={inputHandler}/>
        <br /><br />

        <TextField label="Salary" variant="outlined"
        name='Sal'
        value={input.Sal}
        onChange={inputHandler}/>
        <br /><br />

        <Button variant="contained" onClick={submitHandler}>Add</Button>
        
    </div>
  )
}

export default Add