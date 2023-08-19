import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import Card from 'react-bootstrap/Card'
import card1 from '../assets/s1.jpg'
import card2 from '../assets/s2.jpg'
import card3 from '../assets/s3.jpg'
import card4 from '../assets/s4.jpg'
import card5 from '../assets/s5.jpg'
import card6 from '../assets/s6.jpg'
import card7 from '../assets/s7.jpg'
import card8 from '../assets/s8.jpg'
import card9 from '../assets/s9.jpg' 

const Services = () => {
  return (
    <>
    <section className='services-section text-center text-white'>
     <h1>Our Services</h1>
     <p>
     <NavLink to='/' className='about-home '><AiFillHome className='mb-1'/>  Home  / </NavLink> <span className='about-text'>Our Services</span>
     </p>
    </section>
    <section className='services'>
    <div className='container'>
     <h5 className='text-center'>Shuk Global Pvt Ltd Services</h5>
     <h1 className='text-center'>Our Expertise & Services</h1>
     <div className='row py-4'>
      <div className='col-lg-4 col-md-4 col-12'>
      <Card className='card-top'>
      <Card.Img variant="top" src={card1} alt='' />
      <Card.Body>
        <Card.Title className='service-card'>Red teaming</Card.Title> 
      </Card.Body>
    </Card>
      </div>
      <div className='col-lg-4 col-md-4 col-12'>
      <Card className='card-top'>
      <Card.Img variant="top" src={card2} alt='' />
      <Card.Body>
        <Card.Title className='service-card'>Blue teaming</Card.Title> 
      </Card.Body>
    </Card>
      </div>
      <div className='col-lg-4 col-md-4 col-12'>
      <Card className='card-top'>
      <Card.Img variant="top" src={card3} alt='' />
      <Card.Body>
        <Card.Title className='service-card'>Penetration testing</Card.Title> 
      </Card.Body>
    </Card>
      </div>
     </div>
     <div className='row py-4'>
      <div className='col-lg-4 col-md-4 col-12'>
      <Card className='card-top'>
      <Card.Img variant="top" src={card4} alt='' />
      <Card.Body>
        <Card.Title className='service-card'>Vulnerability assesment</Card.Title> 
      </Card.Body>
    </Card>
      </div>
      <div className='col-lg-4 col-md-4 col-12'>
      <Card className='card-top'>
      <Card.Img variant="top" src={card5} alt='' />
      <Card.Body>
        <Card.Title className='service-card'>White box testing</Card.Title> 
      </Card.Body>
    </Card>
      </div>
      <div className='col-lg-4 col-md-4 col-12'>
      <Card className='card-top'>
      <Card.Img variant="top" src={card6} alt='' />
      <Card.Body>
        <Card.Title className='service-card'>Gray box testing</Card.Title> 
      </Card.Body>
    </Card>
      </div>
     </div>
     <div className='row py-4'>
      <div className='col-lg-4 col-md-4 col-12'>
      <Card className='card-top'>
      <Card.Img variant="top" src={card7} alt='' />
      <Card.Body>
        <Card.Title className='service-card'>Security code review</Card.Title> 
      </Card.Body>
    </Card>
      </div>
      <div className='col-lg-4 col-md-4 col-12'>
      <Card className='card-top'>
      <Card.Img variant="top" src={card8} alt='' />
      <Card.Body>
        <Card.Title className='service-card'>Soc
</Card.Title> 
      </Card.Body>
    </Card>
      </div>
      <div className='col-lg-4 col-md-4 col-12'>
      <Card className='card-top'>
      <Card.Img variant="top" src={card9} alt='' />
      <Card.Body>
        <Card.Title className='service-card'>Noc</Card.Title> 
      </Card.Body>
    </Card>
      </div>
     </div>
     </div>
    </section>
  </>
  )
}

export default Services