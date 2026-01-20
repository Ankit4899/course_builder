import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBook, FaUser, FaClipboardList } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "nav-item active"
      : "nav-item";

  return (
    <nav className="navbar">

      <h2 className="logo">AI Builder</h2>

      <div className="nav-links">

        <Link to="/dashboard" className={isActive("/dashboard")}>
          <FaHome /> Dashboard
        </Link>

        <Link to="/courses" className={isActive("/courses")}>
          <FaBook /> Courses
        </Link>

        <Link to="/tests" className={isActive("/tests")}>
          <FaClipboardList /> Tests
        </Link>

        <Link to="/profile" className={isActive("/profile")}>
          <FaUser /> Profile
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
