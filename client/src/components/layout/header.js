import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderLinks() {
        if (this.props.authenticated) {
            return [
                <li className='navbar__item' key={0}>
                    <Link className='navbar__link' to='/admin/dash'>Dashboard</Link>
                </li>,
                <li className='navbar__item' key={1}>
                    <Link className='navbar__link' to='/admin/orders'>Orders</Link>
                </li>,
                <li className='navbar__item' key={2}>
                    <Link className='navbar__link' to='/admin/products'>Products</Link>
                </li>,
                <li className='navbar__item' key={3}>
                    <Link className='navbar__link' to='/signout'>Sign Out</Link>
                </li>,
            ]
        }
        else {
            return ( 
                <h1>craaaack</h1>
            )
        }
    }

    render() {
        return (
            <nav className='navbar'>
                <ul className='navbar__nav'>
                    {this.renderLinks()}
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(Header);