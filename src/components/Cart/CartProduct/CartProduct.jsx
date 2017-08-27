import React, { Component } from 'react';
import Button from '../CartProductButton/CartProductButton';
import { connect } from 'react-redux';

import reducer from '../../../reducers/CartProduct.reducer';
import './CartProduct.scss';

class CartProduct extends Component {
    constructor(props) {
        super(props);
        this.currency = '€';
    }

    render() {
        return (
            <div className="cart-product">
                <div className="image">
                    <div className="image-box">
                        <img src="http://placehold.it/80x80" className="image-image" /> 
                    </div>
                </div>
                <div className="content">
                    <div className="content-title">
                        {this.props.product.title}
                    </div>
                    <div className="content-description">
                        {this.props.product.subtitle}
                    </div>
                    <div className="content-select">
                        <select>
                            {this.props.product.sku.map((name, index) =>{
                                return <option key={index} value={name}>{name}</option>;
                            })}
                        </select>
                    </div>
                </div>
                <div className="actions">
                    <div className="actions-delete">

                    </div>
                    <div className="actions-counter">
                        <Button
                            type="dec" 
                            product={this.props.product}
                        /> 
                            <strong>{this.props.product.quantity} 
                            {this.currency}</strong> 
                        <Button type="inc" />
                    </div>
                    <div className="actions-price">
                        {this.props.product.quantity * this.props.product.price} 
                    </div>
                </div>
            </div>
        );
    }
}

export default CartProduct;