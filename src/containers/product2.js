import { connect } from 'react-redux';
import ProductConnect from '../components/product/product';

const mapStateToProps = store => ({ product: store.product });

const Product = connect(mapStateToProps)(ProductConnect);

export default Product;
