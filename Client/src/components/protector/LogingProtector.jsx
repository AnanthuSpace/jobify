import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginProtector({ children }) {
  const navigate = useNavigate();
  const adminToken = sessionStorage.getItem("adminAccessToken");

  useEffect(() => {
    if (adminToken) {
      navigate("/admin/home");
    }
  }, [navigate, adminToken]);

  if (!adminToken) {
    return children;
  }

  return null;
}

export default LoginProtector;
