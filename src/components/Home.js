import React from 'react'
import book1 from '../assets/homebook.jpg'
import antique from '../assets/antiues1.jpeg'
import './home.css'
const Home = () => {
    const x = "Shiva";

    return (
        <div className='home'>
            
            <>
                <div class="card" style={{width:"300px"}}>
                    <img src={book1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <a href="/Books" class="btn btn-success">Go to Books</a>
                    </div>
                </div>
                <div class="card" style={{width:"300px"}}>
                    <img src={antique} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <a href="/Antiques" class="btn btn-success">Go to Antiques</a>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Home