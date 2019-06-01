import React from 'react';
import PropTypes from 'prop-types';
import './text.scss';

const Text = ({
  delay,
  text,
  className,
}) => (
  <p
    className={`
      text
      ${className}`
    }
    style={{
      animationDelay: delay,
    }}
  >
    {text}
  </p>
);

Text.defaultProps = {
  className: null,
};

Text.propTypes = {
  delay: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Text;
