import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Jumbotron from 'react-bootstrap/Jumbotron'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../App.css';

import kate1 from '../images/photos/kate1.jpg';
import kate2 from '../images/photos/kate2.jpg';
import george3 from '../images/photos/george3.jpg';
import george4 from '../images/photos/george4.jpg';

import deer from '../images/art/deer.jpg';
import elephant from '../images/art/elephant.jpg';

import seal from '../images/seal.png';
import { Link } from 'react-router-dom';

function HomePage(props) {
    return (
        <div>
            <div className='body-home'>
                <Jumbotron className="bg-transparent jumbotron-fluid p-0">
                    <Container fluid={false}>
                        <Row className="text-left py-5">
                            <Col xs={12}>
                                {<h1 className="home-blue zoom display-1 font-weight-bolder"> {props.title} </h1>}
                                {<h2 className="home-blue display-4 font-weight-light"> {props.subTitle} </h2>}
                                {<p className="home-blue lead font-weight-light"> {props.text} </p>}
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
            <ScrollAnimation
                animateIn='fadeIn animate'>
                <div className='body-rest'>
                    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
                        <Container fluid={false}>
                            <Row className="text-left">
                                <Col>
                                    {<h3 className="home-blue font-weight-bolder"> {props.about} </h3>}
                                </Col>
                                <Col className='see-more'>
                                    {<p className="zoom see-more-p font-weight-bolder"> <Link to='/about' className='customLink'>See more</Link></p>}
                                </Col>
                            </Row>
                            <div className='img-margin'>
                                <Row className='img-align' >
                                    <Col className='img-wrap pad' xs={6} sm={6} md={8}>
                                        <p className='font-weight-lighter home-blue'>
                                           Software engineer based in the Bay Area
                                        </p>
                                    </Col>
                                    <Col className='img-wrap pad' xs={6} sm={6} md={4}>
                                        <img className='img-fluid img' src={seal}/>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </Jumbotron>
                </div>
            </ScrollAnimation>

            <ScrollAnimation
                animateIn='fadeIn animate'>
                <div className='body-rest'>
                    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
                        <Container fluid={false}>
                            <Row className="text-left">
                                <Col>
                                    {<h3 className="home-blue font-weight-bolder"> {props.photos} </h3>}
                                </Col>
                                <Col className='see-more'>
                                    {<p className="zoom see-more-p font-weight-bolder"> <Link to='/portfolio#pic-title' className='customLink'>See more</Link></p>}
                                </Col>
                            </Row>
                            <div className='img-margin'>
                                <Row className='img-align' >
                                    <Col className='img-wrap pad' xs={12} sm={12} md={3}>
                                        <img className='img-fluid img' src={kate2}/>
                                    </Col>
                                    <Col className='img-wrap pad' md={3}>
                                        <img className='img-fluid img' src={kate1}/>
                                    </Col>
                                    <Col className='img-wrap pad' md={3}>
                                        <img className='img-fluid img' src={george3}/>
                                    </Col>
                                    <Col className='img-wrap pad' md={3}>
                                        <img className='img-fluid img' src={george4}/>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </Jumbotron>
                </div>
            </ScrollAnimation>
                    
            <ScrollAnimation
                animateIn='fadeIn animate'>
                <div className='body-rest'>
                    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
                        <Container fluid={false}>
                            <Row className="text-left">
                                <Col>
                                    {<h3 className="home-blue font-weight-bolder"> {props.art} </h3>}
                                </Col>
                                <Col className='see-more'>
                                    {<p className="zoom see-more-p font-weight-bolder"><Link to='/portfolio#art-title' className='customLink'>See more</Link> </p>}
                                </Col>
                            </Row>
                            <div className='img-margin'>
                                <Row className='img-align' >
                                    <Col className='img-wrap pad' xs={12} sm={12} md={6}>
                                        <img className='img-fluid img' src={deer}/>
                                    </Col>
                                    <Col className='img-wrap pad' md={6}>
                                        <img className='img-fluid img' src={elephant}/>
                                    </Col>
                                </Row>
                            </div>

                        </Container>
                    </Jumbotron>
                </div>
            </ScrollAnimation>
        </div>

    );
}

export default HomePage;