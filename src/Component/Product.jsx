import React from 'react'
import { Button } from '@mui/material'
import { Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Product() {
  return (
    <div>
        <CardGroup style={{padding : '5%'}}>
      <Card style={{margin : '2%'}}>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Flips/Winterflip2/Unrec/4._CB593891281_.jpg" />
        <Card.Body>
          
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={{margin : '2%'}}>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Flips/Winterflip2/Unrec/5._CB593891281_.jpg" />
        <Card.Body>
          
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={{margin : '2%'}}>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Flips/Winterflip2/Unrec/Mens/V1/V2/SBC_01._CB620392064_.jpg" />
        <Card.Body>
         
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup style={{padding : '5%'}}>
      <Card style={{margin : '2%'}}>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Flips/Winterflip2/Unrec/Mens/Shoes/Mens-shoes_01._CB604846158_.jpg" />
        <Card.Body>
          
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={{margin : '2%'}}>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Flips/Winterflip2/Unrec/Mens/Shoes/Mens-shoes_02._CB604846158_.jpg" />
        <Card.Body>
          
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={{margin : '2%'}}>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Flips/Winterflip2/Unrec/Mens/Shoes/Mens-shoes_03._CB604846158_.jpg" />
        <Card.Body>
         
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <footer style={{padding : '5%'}}>
   <Button variant="contained" size="large" style={{width : '100%'}}  >
          <Link to='/Navbarr' style={{textDecoration : 'none' , color :'whitesmoke'}}>Back to top</Link>
        </Button>
   </footer>
    </div>
  )
}

export default Product