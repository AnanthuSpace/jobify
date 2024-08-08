import { useState } from "react";
import AdminCompanyContainer from "./AdminCompanyContainer";
import AdminJobContainer from "./AdminJobContainer";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import { Container, Row, Col } from "react-bootstrap";

function DashboardLayout() {
  const [activeComponent, setActiveComponent] = useState('jobs');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'jobs':
        return <AdminJobContainer />;
      case 'companys':
        return <AdminCompanyContainer />;
      default:
        return <AdminJobContainer />;
    }
  };

  return (
    <Container fluid>
      <Row>
        <AdminNavbar />
      </Row>
      <Row>
        <Col xs={2} className="bg-dark" style={{ height: "100vh" }}>
          <AdminSidebar setActiveComponent={setActiveComponent} />
        </Col>
        <Col xs={10}>
          {renderComponent()}
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardLayout;
