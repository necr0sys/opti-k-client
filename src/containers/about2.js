import { connect } from 'react-redux';
import About2Connect from '../components/about2/about2';

const mapStateToProps = store => ({ about2: store.about2 });

const About2 = connect(mapStateToProps)(About2Connect);

export default About2;
