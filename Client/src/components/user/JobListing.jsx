import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import "../../assets/JobListing.css"

function JobListing() {
    const jobData = useSelector((state) => state.admin.jobData) || [];
  
    return (
      <Container className='my-5 col-10 bg-gray'>
        <Row className="g-4">
          {jobData.map((job, index) => (
            <Col md={4} key={job._id || index}>
              <Card className="h-100 custom-shadow">
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Text>{job.description}</Card.Text>
                  <Card.Text>
                    <strong>Location:</strong> {job.location}
                  </Card.Text>
                  <Card.Text>
                    <strong>Company:</strong> {job.companyName}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  
  export default JobListing;
