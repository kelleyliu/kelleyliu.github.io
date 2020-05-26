import React from 'react';
import { BrowserRouter as Route } from "react-router-dom";

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import PortfolioPage from '../pages/PortfolioPage';


const titles = {
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

function Routes() {
    return (
        <div>
            <Route path="/" exact render={() => <HomePage title={titles.home.title} 
                                                        subTitle={titles.home.subTitle} 
                                                        text={titles.home.text}
                                                        about={titles.home.about}
                                                        photos={titles.home.photos}
                                                        art={titles.home.art}
                                                        />}/>
          <Route path="/about" render={() => <AboutPage title={titles.about.title} />}/>
          <Route path="/portfolio" render={() => <PortfolioPage title={titles.portfolio.title} 
                                                                art={titles.portfolio.art} 
                                                                photos={titles.portfolio.photos} />}/>
        </div>
        
    )
}

export default Routes;