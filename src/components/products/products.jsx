import React from 'react';
import PropTypes from 'prop-types';
import './products.scss';
import Header from './header/header';
import Nav from './product-body-desk/nav/nav';
import Servicios from './product-body-desk/services/servicios';

const ProductsConnect = ({ products, handleProducts }) => (
  <section
    className={products.visible ? 'products_section animated fadeIn' : 'products_section'}
    id="producto"
  >
    <Header visible={products.visible} />
    <div className="sub_title_product_body">
      <span className={products.visible ? 'animated fadeIn' : null}>Somos, todo lo que necesitas </span>
      <span className={products.visible ? 'animated fadeIn' : null}>Estilo, tendencia & salud</span>
    </div>
    <div className="container-fluid">
      <div className="row py-5">
        <nav className="produc_nav col-12 col-md-3">
          {
            products.nav.map((name, i) => (
              <Nav
                selected={products[name].visible}
                key={name}
                name={name}
                onClick={handleProducts}
                num={i + 1}
              />
            ))
          }
        </nav>
        <div className="col-12 col-md-9">
          {products.servicios.visible && <Servicios items={products.servicios.items} />}
          {products.tienda.visible && <Servicios items={products.tienda.items} />}
          {products.ofertas.visible && <Servicios items={products.ofertas.items} />}
        </div>
      </div>
    </div>
  </section>
);

ProductsConnect.propTypes = {
  products: PropTypes.shape({
    visible: PropTypes.bool.isRequired,
    servicios: PropTypes.shape({
      visible: PropTypes.bool.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.objectOf(
          PropTypes.string.isRequired,
        ).isRequired,
      ).isRequired,
    }).isRequired,
    tienda: PropTypes.object.isRequired,
    ofertas: PropTypes.object.isRequired,
  }).isRequired,
  handleProducts: PropTypes.func.isRequired,
};

export default ProductsConnect;
