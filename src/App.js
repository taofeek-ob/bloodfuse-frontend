import { Navbar, Footer } from "./components/LandingPage";
import { LandingPage, AboutUs, WhoCanDonate, BookAppointment } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingLayout, AppointmentLayout } from "./components/Layout";
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
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
