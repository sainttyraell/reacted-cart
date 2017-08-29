import React, { Component } from 'react';
import CartProduct from './CartProduct/CartProduct';
import CartSummary from './CartSummary/CartSummary';
import constants from '../../constants/constants';
import './Cart.scss';

import { connect } from 'react-redux';
import { itemsFetchData } from '../../actions/cartItems';

class Cart extends Component {
    componentDidMount() {
        this.props.fetchData(constants.API_PRODUCTS);
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        if (!this.props.items.length) {
            return <p>There is no products in your cart</p>;
        }
        return (
            <div className="Cart">
                
                {this.props.items.map(item => {
                    return <CartProduct key={item.id} product={item} />;
                })}
                <CartSummary />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);