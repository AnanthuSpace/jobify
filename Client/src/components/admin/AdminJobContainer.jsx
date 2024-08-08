import React from 'react';
import Table from 'react-bootstrap/Table';
import { IoIosAddCircleOutline } from "react-icons/io";
import { Container, Row, Col } from "react-bootstrap";

function AdminJobContainer() {
  return (
    <>
    <Container fluid className="p-3">
      <Row className="d-flex justify-content-between align-items-center my-3">
        <Col>
          <h4>Job Management</h4>
        </Col>
        <Col className="text-end">
          <IoIosAddCircleOutline size={30} />
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
            <tr>
              <td>3</td>
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
    </>
  );
}

export default AdminJobContainer;
