import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Products extends Component {
    render() {
        return (
            <div>
                products component
            </div>
        )
    }
}

export default requireAuth(Products);