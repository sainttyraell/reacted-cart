import React from 'react';
import { render } from 'react-dom';

import App from './components/App.jsx';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();
console.log(store);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);