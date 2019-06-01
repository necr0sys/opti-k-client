import { connect } from 'react-redux';
import GalleryConnect from '../components/galeria/gallery';
import { handleIndex } from '../store/actions';

const mapStateToProps = store => ({ galeria: store.galeria });
const mapDispatchToProps = dispatch => ({ handleIndex: num => dispatch(handleIndex(num)) });

const Gallery = connect(mapStateToProps, mapDispatchToProps)(GalleryConnect);

export default Gallery;
