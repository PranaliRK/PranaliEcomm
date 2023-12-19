import Card from './Card';
import Data from '../Data'
import './home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Home = ({search,handleClick,data}) => {
  return (
    <div>
        <Carousel>
            { data && data.filter((item) => item.category.toLowerCase().includes(search)).map((item)=>{
                return(
                <header key={item.id} style={{height:'100vh',width:'80%',margin:'auto',marginTop:'60px'}}><div>
                    <img className='image' src={item.image} />
                    <p className="legend">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>s
                        <p>Price: {item.price}</p>
                        <p>Rating: {item.rating.rate}⭐</p>
                        <button className='button'onClick={()=>handleClick(item)}>Add Cart</button>
                    </p>
                </div>
                </header>)
            })}
            
                
        </Carousel>
        <section className='sec1' style={{marginTop:'50px'}}>
        { data && data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
                return(
                    <Card key={item.id} item={item} handleClick={handleClick} />
                )
            })}
        </section>
    </div>
  )
}

export default Home