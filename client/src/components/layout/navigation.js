import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navigation extends Component {

    render() {
        return (
            <div className='navigation'>
                <input type='checkbox' className='navigation__checkbox' id='navi-toggle' />
                <label htmlFor='navi-toggle' className='navigation__button'>
                    <span className='navigation__icon'>&nbsp;</span>
                </label>
                <div className='navigation__background'>&nbsp;</div>
                <nav className='navigation__nav'>
                    <ul className='navigation__list'>
                        <li className='navigation__item' key={0}>
                            <Link className='navigation__link' to='/'>Home</Link>
                        </li>,
                        <li className='navigation__item' key={1}>
                            <Link className='navigation__link' to='/cart'>Cart</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(Navigation);