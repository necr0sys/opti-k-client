import React from 'react';
import PropTYpes from 'prop-types';
import './header.scss';
import BtnPrimary from '../../btn-primary/btn-primary';

const Header = ({ visible }) => (
  <div className={visible ? 'header_product_cont animated fadeInRight' : 'header_product_cont'}>
    <div className="header_body_cont shadow">
      <div className="body_content">
        <h2>Estilo & salud</h2>
        <span className="sub_title_product">Si, </span>
        <span className="sub_title_product">vienes con nosotros </span>
        <span className="sub_title_product">no te arrepentiras</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Veniam, debitis consequatur libero tenetur excepturi temporibus numquam unde,
          tempora cum corporis ut porro, quam perspiciatis vitae quod atque voluptatum
          id voluptatem.
        </p>
      </div>
      <BtnPrimary href="#contacto" text="Contacto" className="btn_contact_producto" />
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="black_box col-5">
          <div className="black_box_text">
            <span className="opti_k">Opti-k, cuida tu salud  </span>
            <span>sin descuidar tu estilo</span>
          </div>
        </div>
        <div className="header_img col-7">
          <div className="overlay_img" />
        </div>
      </div>
    </div>
    <footer />
  </div>
);

Header.propTypes = {
  visible: PropTYpes.bool.isRequired,
};

export default Header;
