import React, { Component } from 'react';
import $ from 'jquery';

class Office extends Component {
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
        <div className="section-office">
        <h1>office test </h1>
            <ul className='sidebar'>
              <li className='sidebar__item'>
                <a href='#details' className='sidebar__link'>DETAILS</a>
              </li>
              <li className='sidebar__item'>
                <a href='#description' className='sidebar__link'>DESCRIPTION</a>
              </li>
              <li className='sidebar__item'>
                <a href='#related' className='sidebar__link'>RELATED</a>
              </li>
            </ul>
        </div>
      );
    }
  }
  
  export default Office;