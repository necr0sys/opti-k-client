import React from 'react';
import './header.scss';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import BtnResp from './btn-resp/btn-resp';
import detect from '../../utils/interceptor';
import { sections } from '../../store/actions';

class HeaderConnect extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const { onScreen, indexPlus, aboutClose } = this.props;
    if (detect('home') === true) {
      onScreen(sections.hero);
      indexPlus(1);
    }
    if (detect('producto') === true) {
      onScreen(sections.product);
      indexPlus(2);
    }
    if (detect('nosotros') === true) {
      aboutClose();
      indexPlus(3);
    }
    if (detect('galeria') === true) {
      onScreen(sections.galeria);
      indexPlus(4);
    }
    if (detect('about2') === true) {
      onScreen(sections.about2);
      indexPlus(0);
    }
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const {
      handleOnVisible,
      handleNotVisible,
      aboutClose,
      onScreen,
      indexPlus,
    } = this.props;
    window.scrollY > 50 ? handleOnVisible() : handleNotVisible();
    if (detect('home') === true) {
      onScreen(sections.hero);
      indexPlus(1);
    }
    if (detect('producto') === true) {
      onScreen(sections.product);
      indexPlus(2);
    }
    if (detect('nosotros') === true) {
      aboutClose();
      indexPlus(3);
    }
    if (detect('galeria') === true) {
      onScreen(sections.galeria);
      indexPlus(4);
    }
    if (detect('about2') === true) {
      onScreen(sections.about2);
      indexPlus(0);
    }
  }

  render() {
    const { navToggle, visible } = this.props;
    return (
      <header className={visible ? 'my_header_visible shadow-sm' : 'my_header_inVisible'}>
        <nav className="top_nav container">
          <Logo />
          <BtnResp onClick={navToggle} />
        </nav>
      </header>
    );
  }
}

HeaderConnect.propTypes = {
  navToggle: PropTypes.func.isRequired,
  handleOnVisible: PropTypes.func.isRequired,
  handleNotVisible: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  aboutClose: PropTypes.func.isRequired,
  onScreen: PropTypes.func.isRequired,
  indexPlus: PropTypes.func.isRequired,
};

export default HeaderConnect;
