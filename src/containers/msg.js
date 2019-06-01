import { connect } from 'react-redux';
import MsgConnect from '../components/msg/msg';

const mapStateToProps = store => ({ social: store.social });

const Msg = connect(mapStateToProps)(MsgConnect);

export default Msg;
