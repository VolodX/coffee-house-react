import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

// Importing pages
import HomePage from './pages/HomePage/HomePage';
import OurCoffeePage from './pages/OurCoffeePage/OurCoffeePage';
import ForYourPleasurePage from './pages/ForYourPleasurePage/ForYourPleasurePage';

// Importing components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  // Для прикладу, можна зберігати стан додатку, який буде спільним для різних сторінок
  // const [coffeeItems, setCoffeeItems] = useState([]);

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/our-coffee" element={<OurCoffeePage />} />
            <Route path="/for-your-pleasure" element={<ForYourPleasurePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;