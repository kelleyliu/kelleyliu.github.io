import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../App.css';
import Logo from '../images/photos/about_pic.JPG';

function AboutPage(props) {
    return (
        <div>
            <Jumbotron className="bg-transparent jumbotron-fluid p-0">
                <Container className='about-container' fluid={false}>
                    <Row className="text-left">
                        <Col className='about-margin'>
                            {<h1 className="home-blue display-4 font-weight-bolder"> { props.title } </h1>}
                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col className='img-align fadeIn' sm={12} md={6}>
                            <img className='about-pic' src={Logo} alt="portrait"/>
                        </Col>
                        <Col className='about-text' sm={12} md={6}>
                            <div className='home-blue fadeIn about-text-margin'>
                                <h5 className="lead accent-color"> 
                                    Hi, my name is Kelley Liu...
                                </h5>
                                {/* <p>
                                    My name is not pronounced phonetically and I go by "Callie." If you want to know why . . . let's chat!
                                </p> */}
                                <p>
                                    I'm a Bay Area native and I recently graduated from UC Berkeley studying Data Science with a minor in CS and will be starting a full-time job at Apple after summer! 
                                </p>
                                <p>
                                    Going into college, I wasn't particularly passionate about any subject; however, it was there that I discovered coding! Although changing majors was a challenge, it has been a very fulfilling journey. While most of my experience thus far has been more backend work, I hope to broaden my skillset and work on frontend development and design as well.
                                </p> 
                                <p>
                                    In my free time, I love to get together with friends, check out new restaurants, and get a good workout in! Recently, I've gotten into baking and back into art and photography. You can check out some of my work in the <a className='customLink' href='/portfolio'>Portfolio</a> page! 
                                </p>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </Jumbotron>
        </div>
        

    );
}

export default AboutPage;