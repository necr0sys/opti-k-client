import React from 'react';
import PropTypes from 'prop-types';
import './about.scss';
import Msg from '../../containers/msg';
import AboutText from './about-text/about-text';
import BtnPrimary from '../btn-primary/btn-primary';

class AboutConnect extends React.Component {
  componentWillUpdate() {
    this.onAnimations = () => {
      document.getElementById('about_box_1').classList.remove('my_blink_left');
      document.getElementById('about_box_2').classList.remove('my_blink_right');
      document.getElementById('about_box_1').classList += ' animated slideOutLeft';
      document.getElementById('about_box_2').classList += ' animated slideOutRight';
    };
    setTimeout(this.onAnimations, 2500);
  }

  componentWillUnmount() {
    clearTimeout(this.onAnimations);
  }

  render() {
    const { about } = this.props;
    return (
      <section id="nosotros" className="about_cont" style={about ? { visibility: 'visible' } : { visibility: 'hidden' }}>
        <AboutText position="right" />
        {about
        && (
          <div>
            <div id="about_box_1" className="about_boxes my_blink_left">
              <p className="mr-md-3">exp</p>
            </div>
            <div id="about_box_2" className="about_boxes my_blink_right">
              <p>lora</p>
            </div>
            <Msg position="left" delay="3s" text1="opti-k" text2="creando estilo" className="animated fadeInLeft m-2" />
            <div className="btn_cont">
              <BtnPrimary href="#" text="tienda" className="btn_about animated fadeIn" />
            </div>
          </div>
        )
        }
      </section>
    );
  }
}

AboutConnect.propTypes = {
  about: PropTypes.bool.isRequired,
};

export default AboutConnect;
