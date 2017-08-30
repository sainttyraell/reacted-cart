import React, { Component } from 'react';
import CartProduct from './CartProduct/CartProduct';
import CartSummary from './CartSummary/CartSummary';
import constants from '../../constants/constants';

import { connect } from 'react-redux';
import { itemsFetchData } from '../../actions/cartItems';

import PropTypes from 'prop-types';

class Cart extends Component {
    componentDidMount() {
        this.props.fetchData(constants.API_PRODUCTS);
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the cart</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading cart…</p>;
        }
        if (!this.props.items.length) {
            return <p>There are no products in your cart</p>;
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

Cart.propTypes = {
    hasErrored: PropTypes.bool,
    isLoading: PropTypes.bool,
    items: PropTypes.array
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