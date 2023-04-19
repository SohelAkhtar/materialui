import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

function NavBa() {
  return (
    <div>
        <CardGroup style={{padding:'5%'}} >
      <Card style={{padding:'5%' , margin : '2%'}}>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Paid_Services_INR._CB424651263_.svg" style={{width:'30%'}} />
        <Card.Body>
          <Card.Title>Receive timely payments</Card.Title>
          <Card.Text>
          Amazon ensures your payments are deposited directly in your bank account within 7-14 days.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card style={{padding:'5%' , margin : '2%'}}>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Shipping._CB424651256_.svg" style={{width:'30%'}} />
        <Card.Body>
          <Card.Title>Reach crores of customers</Card.Title>
          <Card.Text>
          Sell to crores of engaged customer visiting Amazon.in on desktop and through our mobile app.{' '}
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card style={{padding:'5%' , margin : '2%'}}>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Free_Shipping._CB423451590_.svg" style={{width:'30%'}} />
        <Card.Body>
          <Card.Title>Stress-free delivery</Card.Title>
          <Card.Text>
          Deliver to 100% of India's serviceable pincodes, through Easy Ship & Fulfillment by Amazon
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
    </div>
  )
}

export default NavBa