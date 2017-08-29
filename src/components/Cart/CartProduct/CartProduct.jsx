import React, { Component } from 'react';
import Button from '../CartProductButton/CartProductButton';
import CartSkuPicker from '../CartSkuPicker/CartSkuPicker';
import constants from '../../../constants/constants';
import { connect } from 'react-redux';
import { deleteItem, updateItem } from '../../../actions/cartItems';

import './CartProduct.scss';

import trashImage from '../../../images/trash-icon.svg';

class CartProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: Object.assign({}, this.props.product)
        }
        this.availableQty = this.props.product.quantity;
    }

    decrement() {
        --this.state.product.quantity;
        this.props.updateProduct(this.state.product);  
    }

    removeProduct() {
        this.props.delete(this.props.product.id);
    }

    increment() {
        ++this.state.product.quantity;
        this.props.updateProduct(this.state.product)
    }

    handleChange(event) {
        this.state.product.activeSku = event.target.value
        this.props.updateProduct(this.state.product)
    }
    
    render() {
        const { product } = this.state;

        return (
            <div className="cart-product">
                <div className="image">
                    <div className="image-box">
                        <img src={product.imageUrl} className="image-image" /> 
                    </div>
                </div>
                <div className="content">
                    <div className="content-title">{product.title}</div>
                    <div className="content-description">{product.subtitle}</div>
                    <div className="content-select">
                        <CartSkuPicker 
                            onChange={::this.handleChange} 
                            value={product.activeSku} 
                            sku={product.sku} 
                        />
                    </div>
                </div>
                <div className="actions">
                    <div className="actions-delete">
                        <img onClick={::this.removeProduct} src={trashImage} />
                    </div>
                    <div className="actions-counter">
                        <Button
                            type="dec" 
                            onClick={::this.decrement}
                            disabled={product.quantity === 0}
                        /> 
                            <span>{product.quantity}</span> 
                        <Button 
                            type="inc"
                            onClick={::this.increment}
                            disabled={product.quantity === this.availableQty}
                        />
                    </div>
                    <div className="actions-price">
                        {product.quantity * product.sku[product.activeSku].price} {constants.currency.euro}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (url, id) => dispatch(deleteItem(url, id)),
        updateProduct: (itemToUpdate) => dispatch(updateItem(itemToUpdate))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);