import React from 'react';
import PropTypes from 'prop-types';
import './servicios.scss';

const Servicios = ({ items }) => (
  <div className="servicios_cont animated fadeInRight">
    <div className="row">
      {
        items.map(item => (
          <div key={item.title} className="servicio_cont col-12 col-md-4">
            <h4 className="servicio_title">{item.title}</h4>
            <p className="servicio_descripcion">{item.description}</p>
          </div>
        ))
      }
    </div>
  </div>
);

Servicios.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired).isRequired).isRequired,
};

export default Servicios;
