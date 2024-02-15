// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './redux/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
);
