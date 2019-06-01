import React from 'react';
import PropTypes from 'prop-types';
import './nav.scss';
// import uuidv1 from 'uuid/v1';

const Nav = ({ nav }) => (
  <nav className="nav_cont">
    { nav.isOpen
      && nav.items.map((item, i) => <a href={`#${item}`} key={item} style={{ animationDelay: `${i / 4}s` }} className="nav_item shadow animated fadeInRight">{item}</a>)
    }
  </nav>
);

Nav.propTypes = {
  nav: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default Nav;
