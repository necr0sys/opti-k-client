import React from 'react';
import PropTypes from 'prop-types';
import './tab.scss';

const Tab = ({
  id,
  className,
  bgColor,
  title,
  text,
  onClick,
}) => (
  <button id={id} type="button" style={{ background: bgColor }} onClick={onClick} className={`tab_btn ${className}`}>
    <h2>{title}</h2>
    <p className="d-none d-md-block">{text}</p>
  </button>
);

Tab.defaultProps = {
  className: null,
};

Tab.propTypes = {
  bgColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default Tab;
