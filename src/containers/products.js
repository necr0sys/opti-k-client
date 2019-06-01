import { connect } from 'react-redux';
import { handleProducts } from '../store/actions';
import ProductsConnect from '../components/products/products';

const mapStateToProps = store => ({ products: store.products });
const mapDispatchToProps = dispatch => ({
  handleProducts: product => dispatch(handleProducts(product)),
}
);

const Products = connect(mapStateToProps, mapDispatchToProps)(ProductsConnect);

export default Products;
