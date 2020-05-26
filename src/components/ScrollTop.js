import React, {Component} from 'react';
import {FiArrowUpCircle} from 'react-icons/fi';

class ScrollTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener('scroll', function(e) {
            scrollComponent.toggleVisibility();
        })
    }

    toggleVisibility() {
        if (window.pageYOffset > 400) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }

    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    render() {
        const { is_visible } = this.state;
        return (
            <FiArrowUpCircle className='scrollTop' onClick={this.scrollToTop} style={{ display: is_visible ? 'flex' : 'none' }}/>
        )
    }
}

export default ScrollTop;