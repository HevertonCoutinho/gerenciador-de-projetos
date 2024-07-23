import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';
function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/NewProject">Novo Projeto</Link>
      </ul>
      <Container customClass="min_height">
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/company" element={<Company />}/>
            <Route path="/new-project" element={<NewProject />}/>
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
