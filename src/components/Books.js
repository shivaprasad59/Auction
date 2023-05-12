import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Books.css'
const Books = () => {
    const [booksdata,setBooksData]=useState([])
    const [price1,setPrice]=useState(0);
    useEffect(()=>{
      const fetchData=async()=>{
        try{
         const response=await axios.get("http://localhost:5000/books");
         setBooksData(response.data);
         setPrice(response.data.price);
         console.log(price1);
        }
        catch(e){
            console.log(e);
        }
    }
    fetchData();
    },[])
    return (
        <div  className='books'>
            {
                booksdata.map((item) => {
                    return (
                        <div key={item.id} className='book'>
                            <img  className='image-book' src={item.image} alt={item.title}/>
                            <h4 className='title'>Title:{item.title}</h4>
                            <p className='description'>{item.description}</p>
                            <h5 className='price'>Price:{item.price}</h5>
                            <p className='mobileno'>Phoneno:{item.phone}</p>
                            <button className='button-books'>Bidding</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Books