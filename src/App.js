import { Navbar, Footer } from "./components";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import WhoCanDonate from "./pages/WhoCanDonate";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/who-can-donate" element={<WhoCanDonate />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
