import React, { Component } from 'react';
import $ from 'jquery';

class Bedroom extends Component {
  componentDidMount() {
    this.jQuery();
  }

  jQuery() {
    $(document).ready(() => {
      // $('div').click(() => {
      //   var id = $(this).attr('id');
      //   $('.sidebar__link').removeClass('active');
      //   $("[href=#"+id+"").addClass('active');
      // })
    })
  }

  render() {
    return (
      <div className="section-bedroom">
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
      </div>
    );
  }
}

export default Bedroom;