import React from 'react';
import PropTypes from 'prop-types';
import './social.scss';

const Social = ({ web, logo }) => <li className="social_ico"><a className="" href={web}>{logo}</a></li>;

Social.propTypes = {
  web: PropTypes.string.isRequired,
  logo: PropTypes.element.isRequired,
};

export default Social;
