import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    renderLinks() {
        if (this.props.authenticated) {
            return [
                <li className='navigation__item' key={0}>
                    <Link className='navigation__link' to='/admin/dash'>Dashboard</Link>
                </li>,
                <li className='navigation__item' key={1}>
                    <Link className='navigation__link' to='/admin/orders'>Orders</Link>
                </li>,
                <li className='navigation__item' key={2}>
                    <Link className='navigation__link' to='/admin/products'>Products</Link>
                </li>,
                <li className='navigation__item' key={3}>
                    <Link className='navigation__link' to='/signout'>Sign Out</Link>
                </li>,
            ]
        }
        else {
            return [
                <li className='navigation__item' key={4}>
                    <Link className='navigation__link' to='/'>Home</Link>
                </li>,
                <li className='navigation__item' key={5}>
                    <Link className='navigation__link' to='/cart'>Cart</Link>
                </li>
            ]
        }
    }

    render() {
        return (
            <div className='navigation'>
                <input type='checkbox' className='navigation__checkbox' id='navi-toggle' />
                <label className='navigation__button'>
                    <span className='navigation__icon'>&nbsp;</span>
                </label>
                <div className='navigation__background'>&nbsp;</div>
                <nav className='navigation__nav'>
                    <ul className='navigation__list'>
                        {this.renderLinks()}
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