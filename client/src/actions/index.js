import axios from 'axios';
import { push } from 'react-router-redux';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE } from './types';

const ROOT_URL = 'http://localhost:8008';

export function signinAdmin({ username, password }) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signin`, { username, password })
            .then(response => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                dispatch.push('/admin/dash');
            })
            .catch(() => {
                dispatch(AUTH_ERROR('Invalid login combination'));
            });
    }; 
}