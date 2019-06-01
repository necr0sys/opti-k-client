import React from 'react';
import PropTypes from 'prop-types';
import './btn-primary.scss';

const BtnPrimary = ({
  className,
  onClick,
  href,
  text,
}) => <a className={`btn_primary ${className}`} href={href} onClick={onClick}>{text}</a>;

BtnPrimary.defaultProps = {
  onClick: null,
  href: null,
  className: null,
};

BtnPrimary.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default BtnPrimary;
