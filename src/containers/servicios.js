import { connect } from 'react-redux';
import ServiciosConnect from '../components/product/servicios/servicios';

const mapStateToProps = store => ({ servicios: store.servicios });

const Servicios = connect(mapStateToProps)(ServiciosConnect);

export default Servicios;
