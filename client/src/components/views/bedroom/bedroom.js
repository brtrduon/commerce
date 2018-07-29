import React, { Component } from 'react';
import $ from 'jquery';

class Bedroom extends Component {
  componentDidMount() {
    this.jQuery();
  }

  jQuery() {
    $(document).ready(() => {

    })
  }

  render() {
    return (
      <div className='section-bedroom'>
        <ul className='sidebar'>
              <li className='sidebar__item'>
                <a href='#details' className='sidebar__link'>DETAILS</a>
              </li>
              <li className='sidebar__item'>
                <a href='#description' className='sidebar__link'>DESCRIPTION</a>
              </li>
              <li className='sidebar__item'>
                <a href='#customtab' className='sidebar__link'>CUSTOM TAB</a>
              </li>
            </ul>
        <div className="bedroom">
            <div id='details' className='bedroom__details'>
              <img src='./../../../img/bedroom.jpg' alt='bedroom.jpg' />
              <div className='bedroom__details__text'>
                <h1>Nudie Extendable Sofa for 3 persons.</h1>
              </div>
            </div>
            <div id='description' className='bedroom__description'>
              <h1>description</h1>
            </div>
            <div id='customtab' className='bedroom__customtab'>
              <h1>Custom tab</h1>
            </div>
        </div>
      </div>
    );
  }
}

export default Bedroom;