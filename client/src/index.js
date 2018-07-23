import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/views/App';
import Header from './components/layout/header';

import adminLogin from './components/admin/adminLogin';
// import adminSignup from './components/admin/adminSignup';
import Dash from './components/admin/dash';
import Products from './components/admin/products';
import Signout from './components/admin/signout';

import './index.css';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
);

const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path='/admin' component={adminLogin} />
                <Header>
                    <Route exact path='/' component={App} />
                    {/* <Route exact path='/admin/signup' component={adminSignup} /> */}
                    <Route path='/admin/dash' component={Dash} />
                    <Route path='/admin/products' component={Products} />
                </Header>
                <Route path='/signout' component={Signout} />
            </div> 
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
