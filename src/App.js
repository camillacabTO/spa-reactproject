import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from './components/styles/Container';
import GlobalStyles from './components/styles/Global';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      {/* <Container> */}
      <Routes>
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/' element={<Home />} />
      </Routes>
      {/* </Container> */}
      <Footer />
    </Router>
  );
}

export default App;
