import { Navbar, Hero, Details, WhoWeAre,KnowOurPatients, MakeADiff, Footer } from './components';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Details />
      <WhoWeAre />
      <KnowOurPatients />
      <MakeADiff />
      <Footer />
    </div>
  );
}

export default App;
