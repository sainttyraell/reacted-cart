import React, { Component } from 'react';
import constants from '../../../constants/constants';
import PropTypes from 'prop-types';

class CartSkuPicker extends Component {
    render() {
        const {sku, ...props} = this.props;

        return (
            <select {...props}>
                {sku.map((item, index) => {
                    return (
                        <option key={index} value={index}>
                            {item.variant} price: {item.price} {constants.currency.euro}
                        </option>
                    );
                })}
            </select>
        );
    }
}

CartSkuPicker.propTypes = {
    sku: PropTypes.array
}

export default CartSkuPicker;