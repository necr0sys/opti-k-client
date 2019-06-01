import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.scss';
import './utils/animate.min.css';
import Header from './containers/header';
import Hero from './containers/hero';
import Arrow from './containers/arrow';
import About from './containers/about';
import About2 from './containers/about2';
import Product from './containers/products';
import Carousel from './components/carousel/carousel';
import Gallery from './containers/galeria';

const App = () => (
  <Provider store={store}>
    <Header />
    <Hero />
    <Product />
    <About />
    <Gallery />
    <Carousel />
    <About2 />
    <Arrow />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));

if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
