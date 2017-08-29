import React, { Component } from 'react';
import Button from '../CartProductButton/CartProductButton';
import constants from '../../../constants/constants';
import { connect } from 'react-redux';
import { deleteItem, updateItem } from '../../../actions/cartItems';

import './CartProduct.scss';

class CartProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: Object.assign({}, this.props.product),
        }
        this.availableQty = this.props.product.quantity;
    }

    componentDidMount() {
        
    }

    decrement() {
        --this.state.product.quantity;
        this.props.updateProduct(this.props.items, this.state.product);  
    }

    removeProduct() {
        this.props.delete(constants.API_PRODUCTS, this.props.product.id);
    }

    increment() {
        ++this.state.product.quantity;
        this.props.updateProduct(this.props.items, this.state.product)
    }
    
    render() {
        const { product } = this.state;

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
                       <span onClick={::this.removeProduct}>usuń</span>
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
                        {product.quantity * product.price} {constants.currency.euro}
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
        updateProduct: (items, itemToUpdate) => dispatch(updateItem(items, itemToUpdate))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);