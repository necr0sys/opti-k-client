import { connect } from 'react-redux';
import ArrowConnect from '../components/arrow/arrow';

const mapStateToProps = store => ({ index: store.index });

const Arrow = connect(mapStateToProps)(ArrowConnect);

export default Arrow;
