import React, { Component } from 'react';
import $ from 'jquery';

class Livingroom extends Component {
    constructor() {
      super();

      this.state = {
        liked: false
      };
      this.handleClick = this.handleClick.bind(this);
      this.jQuery();
    }

    handleClick() {
      this.setState({
        liked: true
      });
    }
  
    jQuery() {
      // viewport check
      $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top + 600;
        var elementBottom = elementTop + $(this).outerHeight();
    
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
    
        return elementBottom > viewportTop && elementTop < viewportBottom;
      };
  
      $(document).ready(() => {
        $('.bedroom__pageName').addClass('showTitle');
        $('.bedroom__details').addClass('show');
  
        $('a[href^="#"]').on('click', function(e) {
          e.preventDefault();
  
          var target = this.hash;
          var $target = $(target);
  
          $('html, body').animate({
              'scrollTop': $target.offset().top - 75
          }, 1600, 'swing');
        });
      });
  
      $(window).scroll(() => {
        if ($('#details1').isInViewport()) {
          $('.sidebar__link--details').addClass('active');
          $('.sidebar__link--description, .sidebar__link--related').removeClass('active');
        }
        if ($('#description1').isInViewport()) {
          $('.sidebar__link--details, .sidebar__link--related').removeClass('active');
          $('.sidebar__link--description').addClass('active');
  
          $('.bedroom__description').addClass('show');
        }
        if ($('#related1').isInViewport()) {
          $('.sidebar__link--details, .sidebar__link--description').removeClass('active');
          $('.sidebar__link--related').addClass('active');
  
          $('.bedroom__related').addClass('show');
        }
      });
    }
  
    render() {
      const label = this.state.liked ? 'Liked' : 'Like';

      return (
        <div className='section-livingroom'>
          <ul className='sidebar'>
            <li className='sidebar__item'>
              <a href='#details1' className='sidebar__link sidebar__link--details'>DETAILS</a>
            </li>
            <li className='sidebar__item'>
              <a href='#description1' className='sidebar__link sidebar__link--description'>DESCRIPTION</a>
            </li>
            <li className='sidebar__item'>
              <a href='#related1' className='sidebar__link sidebar__link--related'>RELATED</a>
            </li>
          </ul>
          <div className="bedroom">
            <div className='bedroom__pageName'>
              <h1 className='bedroom__pageName--h1'>LIVING ROOM</h1>
            </div>
            <div id='details1' className='bedroom__details'>
              <img src='./../../../img/livingroom.jpg' alt='livingroom.jpg' />
              <div className='bedroom__details__text'>
                <h1 className='bedroom__details__title'>Mid Century Modern Linen Sofa for 5 persons.</h1>
                <h3 className='bedroom__details__price'><s>$1,000</s> $999</h3>
                <div className='bedroom__details__assembly'>
                  <ul>
                    <li>
                      <b>ASSEMBLY</b>: Carpenter or Self Assembly
                    </li>
                    <li>
                      <b>WARRANTY</b>: 12 Months' Warrant
                    </li>
                  </ul>
                </div>
                <button className='bedroom__button'onClick={this.handleClick} disabled={this.state.liked}>
                {label}
              </button>
              </div>
            </div>
            <div id='description1' className='bedroom__description'>
              <img src='./../../../img/livingroom1.jpg' alt='livingroom1.jpg' />
              <h1 className='bedroom__description__title'><span className='bedroom__description__title-span'>Omnia quae nobis sunt turpia.</span></h1>
              <p className='bedroom__description__paragraph bedroom__description__paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
            <div id='related1' className='bedroom__related'>
              <h2 className='bedroom__related__title'>Related</h2>
              <div className='row'>
              {/* card 1 */}
                <div className='col-1-of-2'>
                  <div className='bedroom__related__card-1'>
                    <a href='/bedroom'>
                      <img src='./../../../img/bedroom.gif' alt='bedroom.gif' className='bedroom__related__img'/>
                    </a>
                  </div>
                </div>
                {/* card 2 */}
                <div className='col-1-of-2'>
                  <div className='bedroom__related__card-2'>
                    <a href='/office'>
                      <img src='./../../../img/office.gif' alt='office.gif' className='bedroom__related__img'/>
                    </a>
                  </div>
                </div>
              </div>
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
  
  export default Livingroom;