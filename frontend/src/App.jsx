import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import CareerDetails from "./pages/CareerDetails";

import JobChoice from "./pages/JobChoice";
import PrivateJobs from "./pages/PrivateJobs";
import GovernmentJobs from "./pages/GovernmentJobs";

import Assessment from "./pages/Assessment";
import Results from "./pages/Results";
import EducationLoan from "./pages/EducationLoan";
import ContactUs from "./pages/ContactUs";

// Authentication
import Login from "./pages/Login";
import Register from "./pages/Register";

// Admin
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminCareers from "./pages/AdminCareers";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />

        {/* Jobs */}
        <Route path="/jobs" element={<JobChoice />} />
        <Route path="/jobs/private" element={<PrivateJobs />} />
        <Route path="/jobs/government" element={<GovernmentJobs />} />

        {/* Assessment */}
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/results" element={<Results />} />

        {/* Education Loan */}
        <Route path="/education-loan" element={<EducationLoan />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Career Details */}
        <Route
          path="/career/:career"
          element={<CareerDetails />}
        />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/careers"element={<AdminCareers />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;