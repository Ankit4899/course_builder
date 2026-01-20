import { Routes, Route, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import Tests from "./pages/Tests";
import Profile from "./pages/Profile";
import Contacts from "./pages/Contacts";
import Assignments from "./pages/Assignments";
import Certificates from "./pages/Certificates";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/tests" element={<Tests />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/Contacts" element={<Contacts />} />
      <Route path="/Assignments" element={<Assignments />} />
      <Route path="/Certificates" element={<Certificates />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
