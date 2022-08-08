import { Navbar, Footer } from "./components/LandingPage";
import {
  LandingPage,
  AboutUs,
  WhoCanDonate,
  BookAppointment,
  Dashboard,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LandingLayout,
  AppointmentLayout,
  DashboardLayout,
} from "./components/Layout";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<LandingLayout />}>
              <Route index element={<LandingPage />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="who-can-donate" element={<WhoCanDonate />} />
            </Route>

            <Route path="/book-appointment" element={<AppointmentLayout />}>
              <Route index element={<BookAppointment />} />
            </Route>
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
