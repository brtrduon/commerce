import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/views/App';
import adminLogin from './components/admin/adminLogin';
import './index.css';

// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={App} />
                <Route path='/admin' component={adminLogin} />
            </div> 
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
