import {LandingPage, AboutUs, WhoCanDonate, BookAppointment, Dashboard, RequestBlood } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {LandingLayout, AppointmentLayout,RequestLayout, DashboardLayout } from "./components/Layout";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <>
          <Routes>
            {/* Landing Page Routes */}
            <Route path="/" element={<LandingLayout />}>
              <Route index element={<LandingPage />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="who-can-donate" element={<WhoCanDonate />} />
            </Route>
            {/* Appointment Page Routes */}
            <Route path="/book-appointment" element={<AppointmentLayout />}>
              <Route index element={<BookAppointment />} />
            </Route>
            {/* RequestBlood Page Routes */}
            <Route path="/request-blood" element={<RequestLayout />}>
              <Route index element={<RequestBlood  />} />
            </Route>
            {/* Dashboard Page Routes */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
