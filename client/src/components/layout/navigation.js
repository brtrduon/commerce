import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Navigation extends Component {

    render() {
        return (
            // <div className='navigation'>
            //     <input type='checkbox' className='navigation__checkbox' id='navi-toggle' />
            //     <label htmlFor='navi-toggle' className='navigation__button'>
            //         <span className='navigation__icon'>&nbsp;</span>
            //     </label>
            //     <div className='navigation__background'>&nbsp;</div>
            //     <nav className='navigation__nav'>
            //         <ul className='navigation__list'>
            //             <li className='navigation__item' key={0}>
            //                 <a className='navigation__link' href='/'>Home</a>
            //             </li>
            //         </ul>
            //     </nav>
            // </div>

            <div className='navbar-fixed'>
                <nav>
                    <div className='nav-wrapper white'>
                        <div className='row'>
                            <div className='col s2'>
                                <h4>this is a logo</h4>
                            </div>
                            <div className='col s9'>
                                <ul className='right hide-on-med-and-down'>
                                    <li><a className='navigation__link--full' href='/'>Home</a></li>
                                    <li><a className='navigation__link--full' href='/bedroom'>Bedroom</a></li>
                                    <li><a className='navigation__link--full' href='/livingroom'>Living Room</a></li>
                                    <li><a className='navigation__link--full' href='/office'>Office</a></li>
                                </ul>
                            </div>
                            <ul id='nav-mobile'>
                                <div className='navigation'>
                                    <input type='checkbox' className='navigation__checkbox' id='navi-toggle' />
                                    <label htmlFor='navi-toggle' className='navigation__button'>
                                        <span className='navigation__icon'>&nbsp;</span>
                                    </label>
                                    <div className='navigation__background'>&nbsp;</div>
                                    <nav className='navigation__nav'>
                                        <ul className='navigation__list'>
                                            <li className='navigation__item'>
                                                <a className='navigation__link' href='/'>Home</a>
                                            </li>
                                            <li className='navigation__item'>
                                                <a className='navigation__link' href='/bedroom'>Bedroom</a>
                                            </li>
                                            <li className='navigation__item'>
                                                <a className='navigation__link' href='/livingroom'>Living Room</a>
                                            </li>
                                            <li className='navigation__item'>
                                                <a className='navigation__link' href='/office'>Office</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;