import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ScrollTop from './components/ScrollTop';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HashRouter>
          <Container className="p-0" fluid={true}>
            <NavBar />  
              <Route path="/" exact render={() => <HomePage />}/>
              <Route path="/about" render={() => <AboutPage/>}/>
              <Route path='/portfolio' render={() => <PortfolioPage/>}/>          
            <Footer/>
          </Container>
          <ScrollTop />
      </HashRouter>
      
    );
  }
}

export default App;
