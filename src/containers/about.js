import { connect } from 'react-redux';
import aboutConnect from '../components/about/about';

const mapStateToProps = store => ({ about: store.about });

const About = connect(mapStateToProps)(aboutConnect);

export default About;
