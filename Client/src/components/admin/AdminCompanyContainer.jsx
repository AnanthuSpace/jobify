import React, { useState } from 'react';
import { Container, Row, Col, Table, Modal, Button } from 'react-bootstrap';
import { IoIosAddCircleOutline } from "react-icons/io";
import CompanyRegistrationForm from './CompanyRegistrationForm';

function AdminCompanyContainer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid className="p-3">
        <Row className="d-flex justify-content-between align-items-center my-3">
          <Col>
            <h4>Company Management</h4>
          </Col>
          <Col className="text-end">
            <IoIosAddCircleOutline size={30} onClick={handleShow} style={{ cursor: 'pointer' }} />
          </Col>
        </Row>
        <Row>
          <Table responsive="sm" bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register New Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CompanyRegistrationForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AdminCompanyContainer;
