import React from 'react';
import PropTypes from 'prop-types';
import './nav.scss';
import { prod } from '../../../../store/actions';

const Nav = ({
  name,
  onClick,
  num,
  selected,
}) => (
  <div className="product_nav_cont d-inline-block d-md-block mb-4 mb-md-0">
    <div className="index_cont p-2 p-md-0">
      <div className="pre_line d-none d-md-inline-block" style={selected ? { borderBottom: '1px solid #ff6600' } : { border: 'none' }}>0</div>
      <p className="d-none d-md-inline-block" style={selected ? { color: '#ff6600' } : { color: 'rgba(255, 255, 255, .5)' }}>{num}</p>
    </div>
    <button style={selected ? { color: '#ff6600' } : { color: 'rgba(255, 255, 255, .5)' }} type="button" id={name} onClick={() => onClick(prod[name])}>{name}</button>
  </div>
);

Nav.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  num: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Nav;
