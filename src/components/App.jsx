import React, { Component } from 'react';
import Cart from './Cart/Cart';
import './App.scss';
import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss';

class App extends Component {
    render() {
        return (
            <div className="app-container">   
                <Cart />
            </div>
        );
    }
}

export default App;