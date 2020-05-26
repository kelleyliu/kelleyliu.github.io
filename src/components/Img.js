import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import '../App.css';

function Img(props) {
    return (
        <div>
            <ScrollAnimation
                animateIn='animated fadeIn'>
                    <img className='img-fluid img' src={props.img}/>
                    <p className='img-desc'>{props.caption}</p>                 
            </ScrollAnimation>
        </div>
    )
}




export default Img;