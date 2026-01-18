// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [notifications, setNotifications] = useState([
//     "New course 'Node.js for Beginners' available!",
//     "Assignment deadline approaching for 'AI Fundamentals'",
//     "Your profile has been updated successfully",
//   ]);
//   const [showNotifications, setShowNotifications] = useState(false);

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("user"));
//     if (!userData) {
//       navigate("/"); // redirect to login if not logged in
//     } else {
//       setUser(userData);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/");
//   };

//   const toggleNotifications = () => {
//     setShowNotifications(!showNotifications);
//   };

//   const features = [
//     { title: "Courses", description: "Browse and enroll in courses", icon: "📚" },
//     { title: "Tests", description: "Take tests and quizzes", icon: "📝" },
//     { title: "Assignments", description: "Submit and track assignments", icon: "📂" },
//     { title: "Contacts", description: "Connect with instructors & peers", icon: "👥" },
//     { title: "Profile", description: "Update your account details", icon: "⚙️" },
//     { title: "Certificates", description: "View earned certificates", icon: "🏆" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">

//       {/* Sidebar / Features */}
//       <aside className="bg-white w-full md:w-64 p-6 shadow-md flex-shrink-0">
//         <h2 className="text-2xl font-bold mb-6">Features</h2>
//         <ul>
//           {features.map((f, idx) => (
//             <li
//               key={idx}
//               className="mb-4 p-3 rounded hover:bg-blue-100 cursor-pointer transition flex items-center gap-2"
//             >
//               <span>{f.icon}</span>
//               <div>
//                 <h3 className="font-semibold">{f.title}</h3>
//                 <p className="text-gray-500 text-sm">{f.description}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">

//         {/* Top Bar / Notifications */}
//         <div className="flex justify-between items-center mb-6 relative">
//           <h1 className="text-3xl font-bold">Welcome, {user?.name || "User"}!</h1>

//           <div className="flex items-center gap-4 relative">
//             {/* Notifications Button */}
//             <button
//               onClick={toggleNotifications}
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//             >
//               Notifications ({notifications.length})
//             </button>

//             {/* Notification Dropdown */}
//             {showNotifications && (
//               <div className="absolute right-0 top-12 w-72 bg-white shadow-lg rounded-lg p-4 z-50">
//                 <h3 className="font-bold mb-2">Notifications</h3>
//                 <ul className="text-gray-700 text-sm">
//                   {notifications.map((note, idx) => (
//                     <li key={idx} className="mb-1">• {note}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* Logout */}
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
//             >
//               Logout
//             </button>
//           </div>
//         </div>

//         {/* Dashboard Cards / Quick Actions */}
//         <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {features.map((f, idx) => (
//             <div
//               key={idx}
//               className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col justify-between"
//             >
//               <div className="text-4xl mb-4">{f.icon}</div>
//               <h3 className="text-xl font-bold">{f.title}</h3>
//               <p className="text-gray-600 mt-2">{f.description}</p>
//             </div>
//           ))}
//         </section>

//       </main>
//     </div>
//   );
// };

// export default Dashboard;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([
    "New course 'Node.js for Beginners' available!",
    "Assignment deadline approaching for 'AI Fundamentals'",
    "Your profile has been updated successfully",
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Sample progress data
  const progressData = [
    { week: "Week 1", completed: 20 },
    { week: "Week 2", completed: 40 },
    { week: "Week 3", completed: 55 },
    { week: "Week 4", completed: 70 },
    { week: "Week 5", completed: 85 },
  ];

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData) {
      navigate("/"); // redirect if not logged in
    } else {
      setUser(userData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const features = [
    { title: "Courses", description: "Browse courses", icon: "📚" },
    { title: "Tests", description: "Take tests & quizzes", icon: "📝" },
    { title: "Assignments", description: "Submit & track", icon: "📂" },
    { title: "Contacts", description: "Connect with peers", icon: "👥" },
    { title: "Profile", description: "Update account", icon: "⚙️" },
    { title: "Certificates", description: "View earned certificates", icon: "🏆" },
  ];

  const quickStats = [
    { title: "Courses Enrolled", value: 12, color: "bg-blue-500", route: "/courses" },
    { title: "Assignments Pending", value: 3, color: "bg-yellow-500", route: "/assignments" },
    { title: "Tests Taken", value: 5, color: "bg-green-500", route: "/tests" },
    { title: "Certificates", value: 2, color: "bg-purple-500", route: "/certificates" },
  ];

  const recentActivities = [
    "Completed 'React Basics' course",
    "Submitted assignment for 'AI Fundamentals'",
    "Started 'Node.js Beginner'",
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">

      {/* Sidebar */}
      <aside className="bg-white w-full md:w-64 p-6 shadow-md flex-shrink-0">
        <h2 className="text-2xl font-bold mb-6">Navigation</h2>
        <ul>
          {features.map((f, idx) => (
            <li
              key={idx}
              onClick={() => navigate(`/${f.title.toLowerCase()}`)}
              className="mb-4 p-3 rounded hover:bg-blue-100 cursor-pointer transition flex items-center gap-2"
            >
              <span className="text-xl">{f.icon}</span>
              <div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6 relative flex-wrap gap-4">
          <h1 className="text-3xl font-bold">Welcome, {user?.name || "User"}!</h1>

          <div className="flex items-center gap-4 relative">

            {/* Search Bar */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, tests..."
              className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Notifications Button */}
            <button
              onClick={toggleNotifications}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Notifications ({notifications.length})
            </button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 top-12 w-72 bg-white shadow-lg rounded-lg p-4 z-50">
                <h3 className="font-bold mb-2">Notifications</h3>
                <ul className="text-gray-700 text-sm">
                  {notifications.map((note, idx) => (
                    <li key={idx} className="mb-1">• {note}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {quickStats.map((stat, idx) => (
            <div
              key={idx}
              onClick={() => navigate(stat.route)}
              className={`p-6 rounded-xl shadow hover:shadow-lg transition text-white cursor-pointer ${stat.color}`}
            >
              <h3 className="text-xl font-bold">{stat.title}</h3>
              <p className="text-3xl font-extrabold mt-2">{stat.value}</p>
            </div>
          ))}
        </section>

        {/* Course Progress Chart */}
        <section className="bg-white p-6 rounded-xl shadow mb-6">
          <h3 className="text-xl font-bold mb-4">Course Progress</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="completed" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </section>

        {/* Recent Activity */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {recentActivities.map((activity, idx) => (
              <li key={idx}>{activity}</li>
            ))}
          </ul>
        </section>

      </main>
    </div>
  );
};

export default Dashboard;
