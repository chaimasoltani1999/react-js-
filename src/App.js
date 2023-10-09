import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



const App = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);

    }
  }
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Link
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Form noValidate validated={validated} onSubmit={handleSubmit}>
  <Row className="mb-3">
    <Form.Group as={Col} md="4" controlId="validationCustom01">
      <Form.Label>First name</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="First name"
        defaultValue="Mark"
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="4" controlId="validationCustom02">
      <Form.Label>Last name</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Last name"
        defaultValue="Otto"
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
      <Form.Label>Username</Form.Label>
      <InputGroup hasValidation>
        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Username"
          aria-describedby="inputGroupPrepend"
          required
        />
        <Form.Control.Feedback type="invalid">
          Please choose a username.
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} md="6" controlId="validationCustom03">
      <Form.Label>City</Form.Label>
      <Form.Control type="text" placeholder="City" required />
      <Form.Control.Feedback type="invalid">
        Please provide a valid city.
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="3" controlId="validationCustom04">
      <Form.Label>State</Form.Label>
      <Form.Control type="text" placeholder="State" required />
      <Form.Control.Feedback type="invalid">
        Please provide a valid state.
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="3" controlId="validationCustom05">
      <Form.Label>Zip</Form.Label>
      <Form.Control type="text" placeholder="Zip" required />
      <Form.Control.Feedback type="invalid">
        Please provide a valid zip.
      </Form.Control.Feedback>
    </Form.Group>
  </Row>
  <Form.Group className="mb-3">
    <Form.Check
      required
      label="Agree to terms and conditions"
      feedback="You must agree before submitting."
      feedbackType="invalid"
    />
  </Form.Group>
  <Button type="submit">Submit form</Button>
</Form>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
</>

  )
}


export default App