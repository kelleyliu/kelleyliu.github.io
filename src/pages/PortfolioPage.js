import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Img from '../components/Img';
import ScrollTop from '../components/ScrollTop';


import '../App.css';
import deer from '../images/art/deer.jpg';
import elephant from '../images/art/elephant.jpg';
import owl from '../images/art/owl.jpg';
import portrait from '../images/art/portrait.jpg';
import sketch from '../images/art/sketch.jpg';
import flower from '../images/art/flower.jpg';
import hands from '../images/art/hands.jpg';

import kate1 from '../images/photos/kate1.jpg';
import kate2 from '../images/photos/kate2.jpg';
import kate3 from '../images/photos/kate3.jpg';
import kate4 from '../images/photos/kate4.jpg';
import kate5 from '../images/photos/kate5.jpg';

import george1 from '../images/photos/george1.jpg';
import george2 from '../images/photos/george2.jpg';
import george3 from '../images/photos/george3.jpg';
import george4 from '../images/photos/george4.jpg';

import jack1 from '../images/photos/jack1.jpg';
import jack2 from '../images/photos/jack2.jpg';

import rin1 from '../images/photos/rin1.jpg';
import rin2 from '../images/photos/rin2.jpg';
import rin3 from '../images/photos/rin3.jpg';

import yose1 from '../images/photos/yose1.jpg';
import yose2 from '../images/photos/yose2.jpg';
import yose3 from '../images/photos/yose3.jpg';
import yose4 from '../images/photos/yose4.jpg';
import yose5 from '../images/photos/yose5.jpg';
import yose6 from '../images/photos/yose6.jpg';
import yose7 from '../images/photos/yose7.jpg';
import yose8 from '../images/photos/yose8.jpg';
import yose9 from '../images/photos/yose9.jpg';

import muir1 from '../images/photos/muir1.jpg';
import muir2 from '../images/photos/muir2.jpg';

import self1 from '../images/photos/self1.jpg';
import self2 from '../images/photos/self2.jpg';
import self3 from '../images/photos/self3.jpg';

function PortfolioPage(props) {

    return (

        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={false}>
                <ScrollTop></ScrollTop>
                <div className='content-margin'>
                    <Row className='text-left'>
                        <Col>
                            {<h3 id='pic-title' className="home-blue font-weight-bolder"> { props.photos } </h3>}
                        </Col>
                    </Row>
                </div>
                <div className='img-margin'>
                    <Row className='img-align'>
                        <Col className='img-wrap pad' sm={12} md={4}>
                            <Img img={self1} caption='Mar 2020: Home'/>
                        </Col>
                        <Col className='img-wrap pad' sm={12} md={4}>
                            <Img img={self2} caption='Mar 2020: Home'/>
                        </Col>
                        <Col className='img-wrap pad' sm={12} md={4}>
                            <Img img={self3} caption='Mar 2020: Home'/>
                        </Col>
                    </Row>
                </div>
                
                <div className='img-margin'>
                    <Row className='img-align'>
                        <Col className='img-wrap pad' sm={12} md={6}>
                            <Img img={muir2} caption='Mar 2020: Muir Beach'/>
                        </Col>
                        <Col className='img-wrap pad' sm={12} md={6}>
                            <Img img={muir1} caption='Mar 2020: Muir Beach'/>
                        </Col>
                        
                    </Row>
                </div>
                
                <div className='img-margin'>
                    <Row className='img-align'>
                        <Col className='img-wrap pad' sm={12} md={3}>
                            <Img img={yose1} caption='Mar 2020: Yosemite'/>
                        </Col>
                        <Col className='img-wrap pad' sm={12} md={3}>
                            <Img img={yose7} caption='Mar 2020: Yosemite'/>
                        </Col>
                        <Col className='img-wrap pad' sm={12} md={3}>
                            <Img img={yose4} caption='Mar 2020: Yosemite'/>
                        </Col>
                        <Col className='img-wrap pad' sm={12} md={3}>
                            <Img img={yose5} caption='Mar 2020: Yosemite'/>
                        </Col>
                    </Row>
                </div>
            
                <div className='img-margin'>
                    <Row className='img-align'>
                        <Col className='img-wrap pad' sm={12} md={6}>
                            <Img img={yose3} caption='Mar 2020: Yosemite'/>
                        </Col>
                        <Col className='img-wrap pad' sm={12} md={6}>
                            <Img img={yose9} caption='Mar 2020: Yosemite'/>
                        </Col>
                        
                    </Row>
                </div>

                <div className='img-margin'>
                    <Row className='img-align'>
                        <Col className='img-wrap pad' sm={12} md={4}>
                            <Img img={rin1} caption='Mar 2020: UC Berkeley'/>
                        </Col>
                        <Col className='img-wrap pad' sm={12} md={4}>
                            <Img img={rin2} caption='Mar 2020: UC Berkeley'/>
                        </Col>
                        <Col className='img-wrap pad' sm={12} md={4}>
                            <Img img={rin3} caption='Mar 2020: UC Berkeley'/>
                        </Col>
                    </Row>
                </div>
                    
                <div className='img-margin'>
                    <Row className='img-align'>
                        <Col className='img-wrap pad' sm={12} md={6}>
                            <Img img={jack1} caption='Feb 2020: Grizzly Peak'/>
                        </Col>
                        <Col className='img-wrap pad' sm={12} md={6}>
                            <Img img={jack2} caption='Feb 2020: Grizzly Peak'/>
                        </Col>
                    </Row>
                </div>

                <div className='img-margin'>
                    <Row className='img-align'>
                        <Col className='img-wrap pad' sm={12} md={3}>
                            <Img img={george1} caption='Feb 2020: SF'/>
                        </Col>
                        <Col className='img-wrap pad' sm={12} md={3}>
                            <Img img={george2} caption='Feb 2020: SF'/>
                        </Col>
                        <Col className='img-wrap pad' sm={12} md={3}>
                            <Img img={george3} caption='Feb 2020: SF'/>
                        </Col>
                        <Col className='img-wrap pad ' sm={12} md={3}>
                            <Img img={george4} caption='Feb 2020: SF'/>
                        </Col>
                        
                    </Row>
                </div>

                <div className='img-margin'>
                    <Row className='img-align'>
                        <Col className='img-wrap pad' sm={12} md={3}>
                            <Img img={kate1} caption='Feb 2020: Oakland'/>
                        </Col>
                        <Col className='img-wrap pad' sm={12} md={3}>
                            <Img img={kate2} caption='Feb 2020: Oakland'/>
                        </Col>
                        <Col className='img-wrap p-0' sm={12} md={6}>
                            <Img img={kate4} caption='Feb 2020: Oakland'/>
                        </Col>
                    </Row>
                </div>

                <div className='content-margin'>
                    <Row className='text-left'>
                        <Col>
                            {<h3 id='art-title' className="home-blue font-weight-bolder"> { props.art } </h3>}
                        </Col>
                    </Row>
                </div>

                <div className='img-margin'>
                    <Row className='img-align img-full'>
                        <Col className='img-wrap pad' sm={12} md={6}>
                            <Img img={elephant} caption='Medium: Watercolor'/>
                        </Col>
                        <Col className='img-wrap pad' sm={12} md={6}>
                            <Img img={deer} caption='Medium: Watercolor, sharpie'/>
                        </Col>
                    </Row>
                </div>

                <div className='img-margin'>
                    <Row className='img-align img-full'>
                        <Col className='img-wrap pad' sm={12} md={4}>
                            <Img img={sketch} caption='Medium:Graphite'/>
                        </Col>
                        <Col className='img-wrap pad' sm={12} md={4}>
                            <Img img={flower} caption='Medium: Watercolor'/>
                        </Col>
                        <Col className='img-wrap pad' sm={12} md={4}>
                            <Img img={portrait} caption='Medium: Marker'/>
                        </Col>
                    </Row>
                </div>

                <div className='img-margin'>
                    <Row className='img-align img-full'>
                        <Col className='img-wrap pad' sm={12} md={6}>
                            <Img img={owl} caption='Medium: Watercolor'/>
                        </Col>
                        <Col className='img-wrap pad' sm={12} md={6}>
                            <Img img={hands} caption='Medium: Graphite'/>
                        </Col>
                    </Row>
                </div>


        </Container>
    </Jumbotron>                       
    );

}

export default PortfolioPage;