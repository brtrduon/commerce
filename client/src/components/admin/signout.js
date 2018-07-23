import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../actions';

class Signout extends Component {
    componentDidMount() {
        this.props.signoutUser();
    }

    render() {
        return <Redirect to='/admin' />
    };
}

export default connect(null, actions)(Signout);