import React from 'react';
import PropTypes from 'prop-types';
import './msg.scss';
import uuidv1 from 'uuid/v1';
import Social from './social/social';


const MsgConnect = ({
  text1,
  text2,
  social,
  className,
  position,
  delay,
}) => (
  <div
    className={`msg_cont ${className}`}
    style={{
      animationDelay: delay,
      [position]: 0,
    }}
  >
    <h2>{text1}</h2>
    <br />
    <h2>{text2}</h2>
    <br />
    <ul>
      {
        social.map(web => <Social web={web.url} logo={web.logo} key={uuidv1()} />)
      }
    </ul>
  </div>
);

MsgConnect.defaultProps = {
  className: null,
  position: null,
};

MsgConnect.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  className: PropTypes.string,
  position: PropTypes.string,
  delay: PropTypes.string.isRequired,
};

export default MsgConnect;
