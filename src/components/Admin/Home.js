import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [description,setDescription]=useState("");
    const [id,setId]=useState(0);
    const [price,setPrice]=useState("");
    const [title,setTitle]=useState("");
    const [image,setImage]=useState("");
    const [phone,setPhone]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
   const fetchData=async()=>{
    try{
        const response=await axios.get("http://localhost:5000/books");
        setId(response.body.length);
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
     const data={
        "id":id,
        "image":image,
        "title":title,
        "description":description,
        "price":price,
        "phone":phone
     }
    const fetchData=async()=>{
        try{
            const response =await axios.post("http://localhost:5000/books",data);
            console.log(response);
          }
          catch(e){
            console.log("Error");
             console.log(e);
          }
    }
    fetchData();
   }
   const handleClick=(e)=>{
      e.preventDefault();
      navigate('/Admin/Antiques');
   }
  return (
    <div>
      <div>
        <div className='admin-home-components'>
            <button className='btn btn-dark addbooks'  >Add Books</button>
            <button className='btn  addantiques' onClick={handleClick}>Add Antiques</button>
        </div>
      </div>
        <form className='form'>
            <input className="input-field" placeholder='Enter book name' onChange={(e)=>setTitle(e.target.value)}/>
            <input className="input-field" placeholder='Enter description' onChange={(e)=>setDescription(e.target.value)}/>
            <input  className="input-field" placeholder='Enter price of the book' onChange={(e)=>setPrice(e.target.value)}/>
            <input  className="input-field" placeholder='Image url' onChange={(e)=>setImage(e.target.value)}/>
            <input  className="input-field" placeholder='Enter seller phoneno' onChange={(e)=>setPhone(e.target.value)}/>
            <button className="input-button"type='submit' onClick={handleSubmit}>submit</button>
        </form>
    </div>
  )
}

export default Home