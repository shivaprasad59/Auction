import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Antiques.css'
const Antiques = () => {
  const [price,setPrice]=useState(0);
  const [data,setData]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response=await axios.get("http://localhost:5000/antiques");
        setData(response.data);
        setPrice(response.data[0].price);
        console.log(response.data);
      }
      catch(e){
        console.log(e);
      }
    }
    fetchData();
  },[])
  
  const handleBiddingPrice=(p,s,c)=>{
    if(s==="Available"){
      if(p>c){
        setPrice(p);
      }
    }
  }
  return (
    <div className='books'>
      {
        data.map((item)=>{
          return(
            <div key={item.id} className='book'>
               <img  className='image-book' src={item.image} alt={item.title}/>
                            <h4 className='title'>Title:{item.title}</h4>
                            <p className='description'>{item.description}</p>
                            <h5 className='price'>Price:{price}</h5>
                            <p className='mobileno'>Phoneno:{item.phone}</p>
                            <input type='number' onChange={(e)=>handleBiddingPrice(e.target.value,item.status,item.price)} placeholder={item.status==="Available"?"Enter Bidding":"sold"} className='antiques-input'/>
                            <button style={{ backgroundColor: item.status==="Available" ? 'green' : 'red' }} className='bidding-button'>{item.status} </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Antiques