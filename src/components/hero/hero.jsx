import React from 'react';
import PropTypes from 'prop-types';
import './hero.scss';
import Nav from './nav/nav';
import Split from './split/split';
import Model from './model/model';
import Msg from '../../containers/msg';

const logoFull = require('../../images/logo-full.png');

const HeroConnect = ({ nav, hero }) => (
  <section id="home" className="hero_section">
    <img className="logo_full animated fadeIn" style={{ animationDelay: '6s' }} src={logoFull} alt="logo-full" />
    <Nav nav={nav} />
    <Split split={hero.split} />
    <Model />
    <Msg className="ml-md-5 mb-2 animated fadeInLeft" position="left" delay="5s" text1="opti-k" text2="marca tendencía" />
  </section>
);

HeroConnect.propTypes = {
  nav: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  hero: PropTypes.shape({
    split: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default HeroConnect;
