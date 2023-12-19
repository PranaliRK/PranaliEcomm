import React, { useState } from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Ecommerse project/componanet/Home'
import Cart from './Ecommerse project/componanet/Cart'
import Navbar from './Ecommerse project/componanet/Navbar'
import About from './Ecommerse project/componanet/About'
import Data from './Ecommerse project/Data'

const App = () => {
  
    const[search,setSearch]=useState(" ")
    const[cart,setCart]=useState([])
    const[data,setData]=useState(Data)
    


    function handleClick(item){
      setCart([...cart,item])

    }
  return (
    <div>
<BrowserRouter>
<Navbar setSearch={setSearch} data={data} setData={setData} size={cart.length}/>
<Routes>
    <Route path='/'element={<Home search={search} data={data} handleClick={handleClick}/> }/>
    <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
    <Route path='/about/:aboutId' data={data} element={<About Data={Data}/>}/>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App