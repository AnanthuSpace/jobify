import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { FaBriefcase, FaUsers, FaSignOutAlt } from "react-icons/fa";
import { adminLogout } from "../../redux/admin/adminSlice";

function AdminSidebar({ setActiveComponent }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(adminLogout());
    navigate("/admin");
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 15px',
    textDecoration: 'none',
    color: 'white',
    marginTop: '1rem',
    cursor: 'pointer'
  };

  return (
    <Nav defaultActiveKey="/home" className="flex-column text-white p-3">
      <div style={linkStyle} onClick={() => setActiveComponent('jobs')}>
        <FaBriefcase className="me-3" />
        <span>Jobs</span>
      </div>
      <div style={linkStyle} onClick={() => setActiveComponent('companys')}>
        <FaUsers className="me-3" />
        <span>Companys</span>
      </div>
      <div style={linkStyle} onClick={handleLogout}>
        <FaSignOutAlt className="me-3" />
        <span>Logout</span>
      </div>
    </Nav>
  );
}

export default AdminSidebar;
