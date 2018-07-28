import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/views/App';

import './index.css';
import Navigation from './components/layout/navigation';
import reducers from './reducers';

const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Navigation />
                <Route path='/' component={App} />
            </div> 
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
