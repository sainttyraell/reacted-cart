import React, { Component } from 'react';
import './CartProductButton.scss';

class CartProductButton extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            this.props.type === 'inc' ? 
            <button className="btn"  {...this.props}>+</button> :
            <button className="btn"  {...this.props}>-</button>
        );
    }
}

export default CartProductButton;
