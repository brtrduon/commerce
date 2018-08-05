import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/views/App';
import Bedroom from './components/views/bedroom/bedroom';
import Livingroom from './components/views/livingroom/livingroom';
import Office from './components/views/office/office';

import './index.css';
import reducers from './reducers';

const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route exact path='/' component={Bedroom} />
                <Route exact path='/bedroom' component={Bedroom} />
                <Route exact path='/livingroom' component={Livingroom} />
                <Route exact path='/office' component={Office} />
            </App> 
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
