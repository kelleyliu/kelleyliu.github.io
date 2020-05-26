import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import gh from '../images/github-icon.svg';
import ln from '../images/linkedin-icon.png';

function Footer() {

    return(
        <footer className="mt-5">
            <Container>
                    <Row className='foot-bottom'>
                        <Col className="p-0 text-center">
                            <div className='text-center'>
                                <h4 className='foot-name font-weight-bolder head-foot-color'>KELLEY LIU</h4>
                                <p className='foot-grey foot-size'>Developer</p>
                                <p className='foot-grey foot-size'>+</p>
                                <p className='foot-grey foot-size'>Food Enthusiast</p>
                                <p className='connect lead foot-grey'>Let's Connect!</p>
                                <p className='home-blue email foot-size foot-grey'> <a className='customLink' href="mailto:kelleyrliu@gmail.com">kelleyrliu@gmail.com</a></p>
                                <div>
                                    <a href='https://github.com/kelleyliu' target='_blank'><img src={gh} className='icon'/></a>
                                    <a href='https://www.linkedin.com/in/kelley-liu/' target='_blank'><img src={ln} className='icon'/></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

        </footer>
    )
}

export default Footer;