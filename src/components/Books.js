import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Books.css'
const Books = () => {
    const [booksdata,setBooksData]=useState([])
    const [price1,setPrice]=useState(0);
    const [cartdata,setCartData]=useState([]);
    const [curitem,setCuritem]=useState("");
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
    useEffect(()=>{
        console.log(curitem);
    },[curitem])
    // const handleCart=(ID)=>{
    //     let item="";
    //     for(let i of booksdata){
    //         if(i.id===ID){
    //                 item=i;
    //                 break;
    //         }
    //     }
    //     const {id,image,title,description,price,phone}=item;
    //     const postData=async()=>{
    //        try{
    //         const response=await axios.post("http://localhost:5000/cart",{
    //             "id":id,
    //             "image":image,
    //             "title":title,
    //             "description":description,
    //             "price":price,
    //             "phone":phone
    //         });
    //         console.log(response);

    //        }
    //        catch(e){
    //         console.log(e);
    //        }
    //     }
    //     postData();
    // }
    
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
                            {/* <button className="btn btn-success books-button" onClick={setCuritem(item)}>Add To Cart</button> */}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Books