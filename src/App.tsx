import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero'; 
import GummiesSection from './components/gummiessection';
import Ingredients from './components/ingredients';
import Shop from './components/shop';
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <main className="bg-[#FDFDF5]">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <GummiesSection />
              <Ingredients />
              <Contact />
            </>
          } />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;