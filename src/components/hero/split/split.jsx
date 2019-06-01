import React from 'react';
import PropTypes from 'prop-types';
import './split.scss';


const Split = ({ split }) => (
  <div className="split_cont">
    {
      split.map((item, i) => <div key={item} className="img_cont my_zoomIn" style={{ animationDelay: `${i / 3}s` }}><img src={item} alt="people with glass" /></div>)
    }
  </div>
);

Split.propTypes = {
  split: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Split;
