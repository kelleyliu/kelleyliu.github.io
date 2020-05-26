import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
    this.state = {
      title: 'Kelley',
      home: {
        title: 'Hello there!',
        subTitle: 'I\'m Kelley.',
        text: 'I\'m a software engineer passionate about creating meaningful and useful tools.',
        about: 'About me',
        photos: 'Photos',
        art: 'Art'
      },
      about: {
        title: 'About me'
      },
      portfolio: {
        title: 'My work',
        art: 'Art',
        photos: 'Photos',
      }
    }

  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <NavBar />  
          
          <Route path="/website" exact render={() => <HomePage title={this.state.home.title} 
                                                        subTitle={this.state.home.subTitle} 
                                                        text={this.state.home.text}
                                                        about={this.state.home.about}
                                                        photos={this.state.home.photos}
                                                        art={this.state.home.art}
                                                        />}/>
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />}/>
          <Route path="/portfolio" render={() => <PortfolioPage title={this.state.portfolio.title} 
                                                                art={this.state.portfolio.art} 
                                                                photos={this.state.portfolio.photos} />}/>

          <Footer/>
        </Container>
        <ScrollTop />
      </Router>
    );
  }
}

export default App;
