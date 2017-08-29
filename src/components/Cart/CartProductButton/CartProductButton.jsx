import React, { Component } from 'react';
import './CartProductButton.scss';

class CartProductButton extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            
            <button className="btn" {...this.props}>
                {this.props.type === 'inc' ? '+' : '-'}
            </button> 
        );
    }
}

export default CartProductButton;
