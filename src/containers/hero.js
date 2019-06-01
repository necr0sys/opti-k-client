import { connect } from 'react-redux';
import HeroConnect from '../components/hero/hero';

const mapStateToProps = store => ({ hero: store.hero, nav: store.nav });

const Hero = connect(mapStateToProps)(HeroConnect);

export default Hero;
