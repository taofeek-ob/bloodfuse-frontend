import { Navbar, Footer } from "./components/LandingPage";
import { LandingPage, AboutUs, WhoCanDonate, BookAppointment } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/who-can-donate" element={<WhoCanDonate />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
          </Routes>
          <Footer />
        </>
      </Router>
    </>
  );
}

export default App;
