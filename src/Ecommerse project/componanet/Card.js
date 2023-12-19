
import { useState } from 'react'
import './card.css'
import { Link } from 'react-router-dom'
const Card = ({item ,handleClick}) => {
  const[open,setOpen]=useState(false)
    const{title,price,image,description,rating,id}=item
  return (
    <div className="card">
        
           <Link to={`/about/${id}`}> <img src={image} alt="" height={'250px'} width={'250px'} />
            <h5>{title}</h5></Link>
            <p>Price: {price}Rs</p>
            <p>Rating: {rating.rate}⭐</p>
            <div className='btn'>
            <button onClick={()=>handleClick(item)} >Add Cart</button>
            <button onClick={()=>setOpen(!open)}>Read More</button>    
            </div>
            {open && (
              <div>
                <p>{description}</p>
                <button onClick={()=>setOpen(!open)}>Close</button>
                </div>
            )}
        
    </div>
  )
  
}

export default Card