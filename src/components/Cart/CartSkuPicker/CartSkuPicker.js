import React, { Component } from 'react';
import constants from '../../../constants/constants';

class CartSkuPicker extends Component {
    render() {
        return (
            <select {...this.props}>
                {this.props.sku.map((item, index) => {
                    return (
                        <option
                            key={index} 
                            value={index}
                        >
                            {item.variant} price: {item.price} {constants.currency.euro}
                        </option>
                    );
                        
                })}
            </select>
        );
    }
}

export default CartSkuPicker;