import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const img1 = require('../../images/carousel/img-1.jpg');
const img2 = require('../../images/carousel/img-2.jpg');
const img3 = require('../../images/carousel/img-3.jpg');
const img4 = require('../../images/carousel/img-4.jpg');
const img5 = require('../../images/carousel/img-5.jpg');

const items = [
  {
    src: img1,
    altText: 'glamour',
    caption: '',
    header: '',
  },
  {
    src: img2,
    altText: 'tendencia',
    caption: '',
    header: '',
  },
  {
    src: img3,
    altText: 'tecnologia',
    caption: '',
    header: '',
  },
  {
    src: img4,
    altText: 'estilo',
    caption: '',
    header: '',
  },
  {
    src: img5,
    altText: 'salud',
    caption: '',
    header: '',
  },
];

const Carousel = () => (
  <UncontrolledCarousel
    pause={false}
    autoPlay
    indicators={false}
    controls={false}
    items={items}
  />
);

export default Carousel;
