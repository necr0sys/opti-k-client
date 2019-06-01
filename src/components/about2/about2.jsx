import React from 'react';
import PropTypes from 'prop-types';
import './about2.scss';
import Eye from './eye/eye';

const About2Connect = ({ about2 }) => (
  <section
    id="about2"
    className={about2 ? 'about2_cont animated fadeInUp' : 'about2_cont'}
  >
    <div className="container">
      <div className="eye_cont text-center">
        <Eye />
      </div>
      <div className="content_cont">
        <h2 className="title_about">Somos la mezcla perfecta entre salud y buen gusto</h2>
        <div className="row">
          <p className="col-12 col-md-6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel</p>
          <p className="col-12 col-md-6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel</p>
        </div>
      </div>
    </div>
  </section>
);

About2Connect.propTypes = {
  about2: PropTypes.bool.isRequired,
};

export default About2Connect;
