import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

function Imaging() {
  return (
    <div>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41nJB6T+aKL._AC_SR400,600_.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <br/>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/31-uvwUkIGL._AC_SR400,600_.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  )
}

export default Imaging