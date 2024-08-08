import { useState } from "react";
import { Container, Row, Col, Table, Modal } from "react-bootstrap";
import { IoIosAddCircleOutline } from "react-icons/io";
import CompanyRegistrationForm from "./CompanyRegistrationForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompany } from "../../redux/admin/adminThunk";
import EditCompany from "./EditCompany";

function AdminCompanyContainer() {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null); 
  const companyData = useSelector((state) => state.admin.companyData) || [];
  const dispatch = useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  const handleDelete = (companyName) => {
    dispatch(deleteCompany({companyName}))
  }

  const handleEditShow = (company) => {
    setSelectedCompany(company);
    setEditShow(true);
  };

  const handleEditClose = () => setEditShow(false);

  return (
    <>
      <Container fluid className="p-3">
        <Row className="d-flex justify-content-between align-items-center my-3">
          <Col>
            <h4>Company Management</h4>
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
                <th>Name</th>
                <th>Description</th>
                <th>Location</th>
                <th>Website</th>
                <th>Industry</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {companyData.length > 0 ? (
                companyData.map((company, index) => (
                  <tr key={company._id || index}>
                    <td>{index + 1}</td>
                    <td>{company.name}</td>
                    <td>{company.description}</td>
                    <td>{company.location}</td>
                    <td>{company.website}</td>
                    <td>{company.industry}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEditShow(company)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => handleDelete(company.name)}
                      >
                        Delete
                      </button>
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

      <EditCompany
        show={editShow}
        handleClose={handleEditClose}
        company={selectedCompany}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register New Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CompanyRegistrationForm handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AdminCompanyContainer;
