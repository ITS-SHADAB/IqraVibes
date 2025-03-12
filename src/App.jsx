import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import OurArticles from './component/Articals';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<OurArticles />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
