import React, { Component } from 'react';
import CartProduct from './CartProduct/CartProduct';
import './Cart.scss';

class Cart extends Component {
    constructor() {
       super() 
       this.state = { 
           items: [],
           hasErrored: false,
           isLoading: false
        };
    }

    componentDidMount() {
        this.getProducts(`http://59a0a1a9c89deb0011c337b3.mockapi.io/api/v1/products`)
    }

    getProducts(url) {
        this.setState({ isLoading: true });
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    this.setState({ hasErrored: true });
                    throw Error(response.statusText);
                }
                this.setState({ isLoading: false });
                return response;
            })
            .then((response) => response.json())
            .then((items) => this.setState({ items }));
    }

    render() {
        if (this.state.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.state.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <div className="Cart">
                <h2>This is cart component</h2>
                {this.state.items.map(item =>{
                    return <CartProduct key={item.id} product={item} />;
                })}
            </div>
        );
    }
}

export default Cart;