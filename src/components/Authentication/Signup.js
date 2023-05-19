import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Signup.css'
const Signup = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [mobile,setMobile]=useState("");
    const [email,setEmail]=useState("");
    const [id,setId]=useState("");
    useEffect(()=>{
         const fetchData=async()=>{
            try{
                const response=await axios.get("http://localhost:5000/signup");
                setId(response.data.length);
                console.log(response);
            }
            catch(e){
                console.log(e);
            }
         }
         fetchData();
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault();
        const fetchData=async()=>{
            const data={
               "id":id,
               "username":username,
               "password":password,
               "email":email,
               "mobile":mobile
            }
            
            try{
                    const response=await axios.post("http://localhost:5000/signup",data);
                    console.log(response);
            }
            catch(e){
                console.log(e);
            }
            }
            fetchData();
    }
  return (
    <div>
        <h2 className='signup'>Sign Up </h2>
        <form className='signup-form'>
            <input placeholder='Enter the username' onChange={(e)=>setUsername(e.target.value)} type='text' className='signup-user'/>
            <input placeholder='Enter the email' onChange={(e)=>setEmail(e.target.value)} type='email' className='signup-user'/>
            <input placeholder='Enter the mobile no' onChange={(e)=>setMobile(e.target.value)} type='number' className='signup-user'/>
            <input placeholder='Enter the password' onChange={(e)=>setPassword(e.target.value)} type='password' className='signup-user'/>
            <button onClick={handleSubmit} className='user-signup-submit btn btn-success'> Submit</button>
        </form>
    </div>
  )
}

export default Signup