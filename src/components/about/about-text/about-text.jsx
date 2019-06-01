import React from 'react';
import PropTypes from 'prop-types';
import './about-text.scss';
import Text from './text/text';

const AboutText = ({ position, className }) => (
  <div className={`about_text_cont ${className}`} style={{ [position]: '0px' }}>
    <Text className="eternal_move" delay="0s" text="tendencía" />
    <Text className="eternal_move" delay="1s" text="confianza" />
    <Text className="eternal_move" delay="2s" text="salud" />
    <Text className="eternal_move" delay="3s" text="estilo" />
  </div>
);

AboutText.defaultProps = {
  className: null,
};

AboutText.propTypes = {
  position: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default AboutText;
