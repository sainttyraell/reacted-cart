import React, { Component } from 'react';
import './cartSummary.scss';

import constants from '../../../constants/constants';

import { connect } from 'react-redux';

class CartSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPrice: 0
        }

        this.countTotalPrice = this.countTotalPrice.bind(this)
    }

    componentDidMount() {
        this.setState({
            totalPrice: this.countTotalPrice(this.props.items)
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            totalPrice: this.countTotalPrice(nextProps.items)
        })
    }

    countTotalPrice(items) {
        let price = 0;
        
        items.map(item => {
            price += item.price*item.quantity;
        })
        return price;
    }
    
    render() {
        return (
            <div className="cart-summary">
               Total: {this.state.totalPrice} {constants.currency.euro}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
    }
}

export default connect(mapStateToProps)(CartSummary);