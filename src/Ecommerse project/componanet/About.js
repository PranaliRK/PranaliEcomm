
import { Tilt } from 'react-tilt'
import { useParams } from 'react-router-dom'
const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etk c..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const About = ({Data}) => {

    const {aboutId}=useParams()
    const data=Data.find((data)=>data.id==parseInt(aboutId))
  return (
    <div className='about'>
        <div className='left'>
        <Tilt options={defaultOptions} >
        <img src={data.image} alt="" style={{height:'250px', width:'250px',marginTop:'100px', position:'relative', left:'500px'}} />
        </Tilt>
           
        </div>
        <div className='right'>  
        <h1 style={{textAlign:'center'}}>{data.title}</h1>
        <p>{data.description}</p>
        <p>{data.price}</p>
        <p>{data.rating.rate}⭐</p>


        </div>
    </div>
  )
}

export default About