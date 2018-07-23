import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class adminSignup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.signupAdmin(this.state);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className='alert'>
                    {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const { username, password } = this.state;

        return (
            <div className='adminLogin'>
                <form onSubmit={this.onSubmit} >
                    <h1 className='heading-primary heading-primary--main'>Admin Signup</h1>
                    <input className='adminLogin__input' name='username' placeholder='Username' value={username} onChange={this.onChange} required />
                    <input className='adminLogin__input' name='password' type='password' placeholder='Password' value={password} onChange={this.onChange} required />
                    <button action='submit' className='btn btn--orange'>Sign Up</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error
    };
}

export default connect(mapStateToProps, actions)(adminSignup);