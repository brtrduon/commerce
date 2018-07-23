import React, { Component } from 'react';
import requireAuth from './requireAuth';
import Products from './products';

class Dash extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default requireAuth(Dash);