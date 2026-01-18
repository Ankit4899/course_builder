// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [showPass, setShowPass] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.password || !form.confirmPassword) {
//       setError("All fields are required");
//       return;
//     }

//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     // ----- Connect backend here later -----
//     console.log("Register Data:", form);

//     // Temporary redirect to login
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

//         <h2 className="text-3xl font-bold text-center mb-6">
//           Create Account
//         </h2>

//         {error && (
//           <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-center">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">

//           {/* Name */}
//           <div>
//             <label className="block mb-1 font-medium">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter name"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block mb-1 font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter email"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block mb-1 font-medium">Password</label>
//             <div className="flex">
//               <input
//                 type={showPass ? "text" : "password"}
//                 name="password"
//                 value={form.password}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Enter password"
//               />

//               <button
//                 type="button"
//                 onClick={() => setShowPass(!showPass)}
//                 className="bg-gray-200 px-3 rounded-r"
//               >
//                 {showPass ? "Hide" : "Show"}
//               </button>
//             </div>
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label className="block mb-1 font-medium">Confirm Password</label>
//             <input
//               type={showPass ? "text" : "password"}
//               name="confirmPassword"
//               value={form.confirmPassword}
//               onChange={handleChange}
//               className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Confirm password"
//             />
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
//           >
//             Register
//           </button>
//         </form>

//         <p className="text-center mt-4">
//           Already have an account?{" "}
//           <Link to="/" className="text-blue-600 font-semibold">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8080/api/auth/register",
        {
          name: form.name,
          email: form.email,
          password: form.password,
        }
      );

      alert("Registration Successful");
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h2>

        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <div className="flex">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border p-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter password"
              />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="bg-gray-200 px-3 rounded-r"
              >
                {showPass ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type={showPass ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
