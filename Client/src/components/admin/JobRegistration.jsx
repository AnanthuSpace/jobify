import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { jobRegistration } from "../../redux/admin/adminThunk"; 

function JobRegistration({ handleClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [companyName, setCompanyName] = useState("");
  const dispatch = useDispatch();
  const companyData = useSelector((state) => state.admin.companyData);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(
        jobRegistration({
        title,
        description,
        requirements: requirements.split(",").map((req) => req.trim()),
        location,
        skills: skills.split(",").map((skill) => skill.trim()),
        companyName,
      })
    ).then((res) => {
      if (res.payload.message) {
        handleClose();
      }
    }
  );
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h2 className="mb-4">Job Registration</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="company" className="mb-3">
              <Form.Label>Company*</Form.Label>
              <Form.Control
                as="select"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              >
                <option value="">Select a company</option>
                {companyData.map((company) => (
                  <option key={company.name} value={company.name}>
                    {company.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="title" className="mb-3">
              <Form.Label>Title*</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="description" className="mb-3">
              <Form.Label>Description*</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="requirements" className="mb-3">
              <Form.Label>Requirements*</Form.Label>
              <Form.Control
                type="text"
                name="requirements"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="Comma-separated"
                required
              />
            </Form.Group>

            <Form.Group controlId="location" className="mb-3">
              <Form.Label>Location*</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="skills" className="mb-3">
              <Form.Label>Skills*</Form.Label>
              <Form.Control
                type="text"
                name="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="Comma-separated"
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

export default JobRegistration;
