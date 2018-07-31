import React, { Component } from 'react';
import $ from 'jquery';

class Bedroom extends Component {
  componentDidMount() {
    this.jQuery();
  }

  jQuery() {
    $(document).ready(() => {
      $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top - 75
        }, 1600, 'swing');
      });
    });

    
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
            <a href='#related' className='sidebar__link'>RELATED</a>
          </li>
        </ul>
        <div className="bedroom">
            <div id='details' className='bedroom__details'>
              <img src='./../../../img/bedroom.jpg' alt='bedroom.jpg' />
              <div className='bedroom__details__text'>
                <h1 className='bedroom__details__title'>Nudie Extendable Sofa for 3 persons.</h1>
                <h3 className='bedroom__details__price'><s>$169</s> $149</h3>
                <div className='bedroom__details__assembly'>
                  <ul>
                    <li>
                      <b>ASSEMBLY</b>: Carpenter Assembly
                    </li>
                    <li>
                      <b>WARRANTY</b>: 12 Months' Warrant
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id='description' className='bedroom__description'>
              <img src='./../../../img/bedroom1.jpg' alt='bedroom1.jpg' />
              <h1 className='bedroom__description__title'><span className='bedroom__description__title-span'>At vero eos et accusamus et iusto odio dignissimos.</span></h1>
              <p className='bedroom__description__paragraph bedroom__description__paragraph--1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className='bedroom__description__paragraph'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
              </p>
            </div>
            <div id='related' className='bedroom__related'>
              <h1>Related</h1>
            </div>
          <div className='footer'>
            <h1 className='footer__title'>FURNISHING YOUR DREAMS</h1>
            <div className='row'>
              <div className='col-1-of-2'>
                  <ul className='footer__list'>
                    <li className='footer__item'>
                      <a href='/bedroom' className='footer__link'>BEDROOM</a>
                    </li>
                    <li className='footer__item'>
                      <a href='/livingroom' className='footer__link'>LIVING ROOM</a>
                    </li>
                    <li className='footer__item'>
                      <a href='/office' className='footer__link'>OFFICE</a>
                    </li>
                  </ul>
              </div>
              <div className='col-1-of-2'>
                <p className='footer__copyright'>
                  All images are property of their respective owners
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bedroom;