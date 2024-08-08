import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function CompanyRegistrationForm() {
  
  const [ name, setName ] = useState("")
  const [ discription, setDiscription ] = useState("")
  const [ location, setLocation ] = useState("")
  const [ website, setWebsite ] = useState("")
  const [ industry, setIndustry ] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(name);
      console.log(location);
      console.log(discription);
      console.log(website);
      console.log(industry);
      
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h2 className="mb-4">Company Registration</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Name*</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="description" className="mb-3">
              <Form.Label>Description*</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={discription}
                onChange={(e)=>setDiscription(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="location" className="mb-3">
              <Form.Label>Location*</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="website" className="mb-3">
              <Form.Label>Website*</Form.Label>
              <Form.Control
                type="text"
                name="website"
                value={website}
                onChange={(e)=>setWebsite(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="industry" className="mb-3">
              <Form.Label>Industry*</Form.Label>
              <Form.Control
                type="text"
                name="industry"
                value={industry}
                onChange={(e)=>setIndustry(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CompanyRegistrationForm;
