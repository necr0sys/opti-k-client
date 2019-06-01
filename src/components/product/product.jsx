import { hot } from 'react-hot-loader/root';
import React from 'react';
import PropTypes from 'prop-types';
import './product.scss';
import Tab from './tab/tab';

class ProductConnect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ofert: true,
      store: false,
    };
    this.onOfert = this.onOfert.bind(this);
    this.onStore = this.onStore.bind(this);
  }

  onOfert() {
    this.setState({ ofert: true, store: false });
  }

  onStore() {
    this.setState({ ofert: false, store: true });
  }


  render() {
    const { ofert, store } = this.state;
    const { product } = this.props;
    return (
      <section className={product ? 'product_cont animated fadeInUp' : 'product_cont'} id="producto">
        <div className="tab_cont">
          <Tab
            id="ofert"
            className="nada"
            bgColor={ofert ? '#0099cc' : 'rgba(0, 153, 204, .5)'}
            title="Oferta"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nummy nibh euismod tincidunt utdiam nonummy nibh euismod tincidunt ut diam nonummy nibheuismod tincidunt ut diam nonummy nibh euismod tincidunt ut"
            onClick={this.onOfert}
          />
          <Tab
            id="store"
            className="nada"
            bgColor={store ? '#501887' : 'rgba(80, 24, 135, .5)'}
            title="Producto"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nummy nibh euismod tincidunt utdiam nonummy nibh euismod tincidunt ut diam nonummy nibheuismod tincidunt ut diam nonummy nibh euismod tincidunt ut"
            onClick={this.onStore}
          />
        </div>
        {ofert && <div className="ofert_cont products_content" />}
        {store && <div className="store_cont products_content">foo</div>}
      </section>
    );
  }
}

ProductConnect.propTypes = {
  product: PropTypes.bool.isRequired,
};

export default hot(ProductConnect);
