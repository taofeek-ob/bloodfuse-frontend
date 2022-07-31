import { Navbar, Footer } from './components';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
