import { useState } from "react";
import Table from "react-bootstrap/Table";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Container, Row, Col, Modal } from "react-bootstrap";
import JobRestration from "./JobRegistration";
import { useDispatch, useSelector } from "react-redux";
import { deleteJob } from "../../redux/admin/adminThunk";

function AdminJobContainer() {
  const [show, setShow] = useState(false);
  const jobData = useSelector((state) => state.admin.jobData) || [];
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()

  const handleDelete = (id, name) => {
    dispatch(deleteJob({id, name}))
  }
  
  return (
    <>
      <Container fluid className="p-3">
        <Row className="d-flex justify-content-between align-items-center my-3">
          <Col>
            <h4>Job Management</h4>
          </Col>
          <Col className="text-end">
            <IoIosAddCircleOutline
              size={30}
              onClick={handleShow}
              style={{ cursor: "pointer" }}
            />
          </Col>
        </Row>
        <Row>
          <Table responsive="sm" bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Location</th>
                <th>Company Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobData.length > 0 ? (
                jobData.map((job, index) => (
                  <tr key={job._id || index}>
                    <td>{index + 1}</td>
                    <td>{job.title}</td>
                    <td>{job.description}</td>
                    <td>{job.location}</td>
                    <td>{job.companyName}</td>
                    <td>
                      <button className="btn btn-primary">Edit</button>
                      <button className="btn btn-danger ms-2" onClick={()=>handleDelete(job._id,job.companyName)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No companies available
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register New Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <JobRestration handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AdminJobContainer;
