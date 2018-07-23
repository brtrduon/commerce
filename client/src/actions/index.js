import axios from 'axios';
// import { push } from 'react-router-redux';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE } from './types';

const ROOT_URL = 'http://localhost:8008';

export function signinAdmin({ username, password }, cb) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signin`, { username, password })
            .then(res => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', res.data.token)
                cb();
            })
            .catch(() => {
                dispatch(authError('Invalid login combination'));
            });
    }; 
}

// export function signupAdmin({ username, password }) {
//     return function(dispatch) {
//         axios.post(`${ROOT_URL}/signup`, { username, password })
//             .then(res => {
//                 dispatch({ type: AUTH_USER });
//                 localStorage.setItem('token', res.data.token);
//                 dispatch(push('/admin/dash'));
//             })
//             .catch(res => dispatch(authError(res.data.error)));
//     }
// }

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
};

export function signoutUser() {
    localStorage.removeItem('token');

    return {
        type: AUTH_USER,
        payload: ''
    };
};