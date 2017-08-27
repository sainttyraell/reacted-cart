import React, { Component } from 'react';
import './CartProductButton.scss';

class CartProductButton extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.quantity = this.props.product.quantity;
    }

    render() {
        const {handleIncrement, handleDecrement} = this.props;
        return (
            this.props.type === 'inc' ? 
            <button className="btn">+</button> :
            <button className="btn">-</button>
        );
    }
}

export default CartProductButton;
