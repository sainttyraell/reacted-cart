import React, { Component } from 'react';
import Button from '../CartProductButton/CartProductButton';
import { connect } from 'react-redux';

import './CartProduct.scss';

class CartProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.product.quantity
        }
        this.currency = '€'
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);        
    }

    decrement() {
        this.setState({
            quantity: --this.state.quantity
        })
    }

    increment() {
        this.setState({
            quantity: ++this.state.quantity
        })
    }
    
    render() {
        const { product } = this.props;
        
        return (
            <div className="cart-product">
                <div className="image">
                    <div className="image-box">
                        <img src="http://placehold.it/80x80" className="image-image" /> 
                    </div>
                </div>
                <div className="content">
                    <div className="content-title">
                        {product.title}
                    </div>
                    <div className="content-description">
                        {product.subtitle}
                    </div>
                    <div className="content-select">
                        <select>
                            {product.sku.map((name, index) =>{
                                return <option key={index} value={name}>{name}</option>;
                            })}
                        </select>
                    </div>
                </div>
                <div className="actions">
                    <div className="actions-delete">
                        usuń
                    </div>
                    <div className="actions-counter">
                        <Button
                            type="dec" 
                            onClick={this.decrement}
                            disabled={this.state.quantity === 0}
                        /> 
                            <span>{this.state.quantity}</span> 
                        <Button 
                            type="inc"
                            onClick={this.increment}
                            disabled={this.state.quantity === product.quantity}
                        />
                    </div>
                    <div className="actions-price">
                        {this.state.quantity * product.price} {this.currency}
                    </div>
                </div>
            </div>
        );
    }
}

export default CartProduct;