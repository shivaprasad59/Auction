import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Login.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [details,setDetails]=useState([]);
    const [id,setid]=useState("");
    useEffect(()=>{
       const fetchData=async()=>{
        try{
      const response=await axios.get("http://localhost:5000/signup");
      setDetails(response.data);
      console.log(response.data);

        }
        catch(e){
            console.log(e);
        }
       }
       fetchData();
    },[])
    // const [temp,setTemp]=useState(0);
    const navigate=useNavigate();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const fetchData=async()=>{
            const data={
               "id":id,
               "username":username,
               "password":password
            }
            let temp=0;
            for(let i of details){
                if(i.username===username && i.password===password){
                    temp=1;
                    break;
                }
            }
            if(temp===1){
            try{
                    const response=await axios.post("http://localhost:5000/login",data);
                    console.log(response);
                    console.log(data);
                    navigate("/");
            }
            catch(e){
                console.log(e);
            }
            }
            else{
                alert("Details not matched.Please enter correct details");
            }
            }
            fetchData();
    }
  return (
    <div>
        <h2 className='login'>Login </h2>
        <form className='login-form'>
            <input placeholder='Enter the username' onChange={(e)=>setUsername(e.target.value)} type='text' className='input-user'/>
            <input placeholder='Enter the password' onChange={(e)=>setPassword(e.target.value)} type='password' className='input-user'/>
            <button onClick={handleSubmit} className='user-login-submit btn btn-dark'> Submit</button>
        </form>
    </div>
  )
}

export default Login