import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class adminLogin extends Component {
    handleFormSubmit({ username, password }) {
        console.log(username, password);
        this.props.signinAdmin({ username, password });
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
        const { handleSubmit, fields: { username, password }} = this.props;
        // handleSubmit is a helper from redux-form

        return (
            <div className='adminLogin'>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <h1 className='heading-primary heading-primary--main'>Admin Login</h1>
                    <fieldset className='adminLogin__form-group'>
                        <label className='adminLogin__label'>Username</label>
                        <input {...username} type='text' className='adminLogin__input' required />
                    </fieldset>
                    <fieldset className='adminLogin__form-group'>
                        <label className='adminLogin__label'>Password</label>
                        <input {...username} type='password' className='adminLogin__input' required />
                    </fieldset>
                    {this.renderAlert()}
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

export default reduxForm({
    form: 'signin',
    fields: ['username', 'password']
}, mapStateToProps, actions)(adminLogin);