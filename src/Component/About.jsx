import { Button, Table } from '@mui/material'
import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Aboutcss.css'

function About() {
  return (
    <div>
      <div style={{padding : '5%' , fontFamily : 'sans-serif'}} className='splitcolor'>
      <h1 style={{fontFamily:'sans-serif' , padding:'5%' , wordSpacing : '10px' , textDecoration : 'underline'}}>Who are <span style={{color:'yellowgreen'}}> we </span></h1>
      <p style={{fontFamily : 'sans-serif'}}> <b>Amazon</b>  is guided by four principles: <i>customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking</i>. Amazon strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work. Customer reviews, 1-Click shopping, personalized recommendations, Prime, Fulfillment by Amazon, AWS, Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire TV, Amazon Echo, Alexa, Just Walk Out technology, <i> Amazon Studios, and The Climate Pledge</i> are some of the things pioneered by Amazon.</p>
    <CardGroup style={{padding : '2%'}}>
      <Card style={{margin : '2%'}}>
        <Card.Img variant="top" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_Leadership_Theories_Every_Manager_Should_Know.jpg" />
        <Card.Body>
          <Card.Title>Leadership Principles</Card.Title>
          <Card.Text>
          Our Leadership Principles are more than inspirational wall hangings. The 16 principles guide our discussions and decisions every day.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card style={{margin : '2%'}}>
        <Card.Img variant="top" src="https://static.cdn.printful.com/dist-pf/image-assets/policies-page-main-illustration.0b4dcb40eb841571177eef71ee757ac3.svg" />
        <Card.Body>
          <Card.Title>Our Positions</Card.Title>
          <Card.Text>
          While our positions are carefully considered and deeply held, there is much room for healthy debate and differing opinions. We hope being clear about our positions is helpful.{' '}
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card style={{margin : '2%'}}>
        <Card.Img variant="top" src="https://manavrachna.edu.in/wp-content/uploads/2019/11/public-policy16530132_xxl.jpg" />
        <Card.Body>
          <Card.Title>Public Policy</Card.Title>
          <Card.Text>
          We engage with policymakers on a wide range of issues that are important to our customers and employees. Learn more about our views on current policy issues.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card style={{margin : '2%'}}>
        <Card.Img variant="top" src="https://www.niit.com/en/learning-outsourcing/sites/default/files/inline-images/awards-mob_0.jpg" />
        <Card.Body>
          <Card.Title>Awards and Recognition</Card.Title>
          <Card.Text>
          We are honored to be recognized for the work we do on behalf of our customers, employees, and communities every day.
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
         <footer>
   <Button variant="contained" size="large" style={{width : '100%'}}  >
          <Link to='/Navbarr' style={{textDecoration : 'none' , color :'whitesmoke'}}>Back to top</Link>
        </Button>
   </footer>
    </div>
    </div>
  )
}

export default About