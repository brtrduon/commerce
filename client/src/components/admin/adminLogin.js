import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class adminLogin extends Component {
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
        this.props.signinAdmin(this.state, () => {
            this.props.history.push('/admin/dash')
        });
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className='adminLogin__alert'>
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
                    <h1 className='heading-primary heading-primary--main'>Admin Login</h1>
                    {this.renderAlert()}
                    <input className='adminLogin__input' name='username' placeholder='Username' value={username} onChange={this.onChange} required />
                    <input className='adminLogin__input' name='password' type='password' placeholder='Password' value={password} onChange={this.onChange} required />
                    <button action='submit' className='btn btn--orange'>Sign In</button>
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

export default connect(mapStateToProps, actions)(adminLogin);