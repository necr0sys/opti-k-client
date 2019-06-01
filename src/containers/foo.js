import { connect } from 'react-redux';
import Bar from '../components/bar';

const mapStateToProps = store => ({ header: store.hero });

const Foo = connect(mapStateToProps)(Bar);

export default Foo;
