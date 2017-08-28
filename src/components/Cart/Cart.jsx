import React, { Component } from 'react';
import CartProduct from './CartProduct/CartProduct';
import './Cart.scss';

import { connect } from 'react-redux';
import { itemsFetchData } from '../../actions/cartItems';

class Cart extends Component {
    componentDidMount() {
        this.props.fetchData(`http://59a0a1a9c89deb0011c337b3.mockapi.io/api/v1/products`);
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <div className="Cart">
                <h2>This is cart component</h2>
                {this.props.items.map(item => {
                    return <CartProduct key={item.id} product={item} />;
                })}
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