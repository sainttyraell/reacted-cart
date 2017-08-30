import React, { Component } from 'react';
import './CartProductButton.scss';
import PropTypes from 'prop-types';

class CartProductButton extends Component {
    render() {
        return (
            <button className="btn" {...this.props}>
                {this.props.type === 'inc' ? '+' : '-'}
            </button> 
        );
    }
}

CartProductButton.PropTypes = {
    type: PropTypes.string
}

export default CartProductButton;
