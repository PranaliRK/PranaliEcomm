import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({setSearch,size,data,setData}) => {
      const filterResult=(catItem)=>{
        const result=data.filter((curData)=>{
          return curData.category===catItem
        })
        console.log(result);
        setData(result)
      }
      const filterResult2=(catItem)=>{
        const result=data.filter((curData)=>{
          return curData.category===catItem
        })
        setData(result)
      }
      const filterResult3=(catItem)=>{
        const result=data.filter((curData)=>{
          return curData.category===catItem
        })
        setData(result)
      }
      const filterResult4=(catItem)=>{
        const result=data.filter((curData)=>{
          return curData.category===catItem
        })
        setData(result)
      }


  return (
    <div>
        <nav className='nav'>
        <article className='navart'>
            <div className='navdiv'><Link  style={{color:'white', textDecoration:'none'}}to='/'>home</Link></div>
            <div className='navdiv'>
                <input onChange={(e)=>setSearch(e.target.value)} type="search" placeholder='serach here' />
            </div>
            <div className='navdiv'><Link style={{color:'white', textDecoration:'none'}} to='/cart'>Cart🛒<sup style={{color:'white'}}>{size}</sup></Link></div>
          </article>
          
          <article className='' style={{background:'black',margin:'auto',display:'flex', justifyContent:'center'}}>
          <button className='btn1' onClick={()=>filterResult(`men's clothing`)}>Men</button>
          <button className='btn1' onClick={()=>filterResult2(`women's clothing`)}>Women</button>
          <button className='btn1'onClick={()=>filterResult3(`electronics`)}>Electronics</button>
          <button className='btn1'onClick={()=>filterResult4(`jewelery`)}>Jewelery</button>
          </article>
        </nav>
    </div>
  )
}

export default Navbar