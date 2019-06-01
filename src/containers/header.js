import { connect } from 'react-redux';
import {
  navToggle, onScreen, sections, notScreen, aboutClose, indexPlus,
} from '../store/actions';
import HeaderConnect from '../components/header/header';

const mapStateToProps = store => ({ visible: store.nav.visible, index: store.index });
const mapDispatchToProps = dispatch => ({
  navToggle: () => dispatch(navToggle()),
  handleOnVisible: () => dispatch(onScreen(sections.nav)),
  handleNotVisible: () => dispatch(notScreen(sections.nav)),
  aboutClose: () => dispatch(aboutClose()),
  onScreen: section => dispatch(onScreen(section)),
  indexPlus: number => dispatch(indexPlus(number)),
});

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderConnect);

export default Header;
