import axios from 'axios';
// import { push } from 'react-router-redux';
import { AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:8008';

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
};