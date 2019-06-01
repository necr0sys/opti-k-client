import { combineReducers } from 'redux';
import React from 'react';
import {
  NAV_TOGGLE,
  ON_SCREEN,
  sections,
  NOT_SCREEN,
  ABOUT_CLOSE,
  INDEX_PLUS,
  HANDLE_PRODUCTS,
  prod,
  HANDLE_INDEX,
} from './actions';


const split1 = require('../images/split/img-split-1.png');
const split2 = require('../images/split/img-split-2.png');
const split3 = require('../images/split/img-split-3.png');
const split4 = require('../images/split/img-split-4.png');
const split5 = require('../images/split/img-split-5.png');
const split6 = require('../images/split/img-split-6.png');
const split7 = require('../images/split/img-split-7.png');
const split8 = require('../images/split/img-split-8.png');
const split9 = require('../images/split/img-split-9.png');
const split10 = require('../images/split/img-split-10.png');
const split11 = require('../images/split/img-split-11.png');
const split12 = require('../images/split/img-split-12.png');
const split13 = require('../images/split/img-split-13.png');

const split = [
  split1,
  split2,
  split3,
  split4,
  split5,
  split6,
  split7,
  split8,
  split9,
  split10,
  split11,
  split12,
  split13,
];

const montura0 = require('../images/montura-1.jpg');
const montura1 = require('../images/montura-2.jpg');
const montura2 = require('../images/montura-3.jpg');
const montura3 = require('../images/montura-4.jpg');
const montura4 = require('../images/montura-5.jpg');
const montura5 = require('../images/montura-6.jpg');

const initialState = {
  index: 1,
  social: [
    {
      logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z" /></svg>,
      url: 'www.facebook.com',
    },
    {
      logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>,
      url: 'www.instagram.com',
    },
    {
      logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>,
      url: 'www.twitter.com',
    },
    {
      logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>,
      url: 'wwww.youtube.com',
    },
    {
      logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" /></svg>,
      url: 'www.pinterest.com',
    },
  ],
  nav: {
    visible: false,
    isOpen: false,
    items: ['nosotros', 'producto', 'contacto', 'tienda'],
  },
  hero: {
    visible: false,
    split,
  },
  about: false,
  about2: false,
  products: {
    nav: ['servicios', 'tienda', 'ofertas'],
    visible: false,
    servicios: {
      visible: true,
      items: [
        {
          title: 'optometria',
          description: 'Realizamos servicio de optemetria totalmente gratis, revizamos la salud de tus ojos y te recomendamos lo que mejor se ajusta a ti dentro de nuestra gran variedad de productos',
        },
        {
          title: 'RENOVACION',
          description: 'enemos la mas amplia gama de cristales con ultima tecnologia del mercado asi como lentes de contacto de las mejores marcas y estilos.',
        },
        {
          title: 'REPARACION',
          description: 'Reparamos sus lentes y restauramos de ser necesario, contamos con los mejores profesionales en el area de reapracion y restauracion de lentes de cualquier material.',
        },
      ],
    },
    tienda: {
      visible: false,
      items: [
        {
          title: 'BIFOCALES',
          description: 'Nuestros lentes bifocales y monturas son de las mejores marcas y estilos, las caracteristicas y variedad de nuestros productos son casi unicas en el mercado local.',
        },
        {
          title: 'LENTILLAS',
          description: 'contamos con la mejor calidad y tecnologia en lentillas de contacto, lociones hidratantes para el ojo, nuestas lentillas estan aseguradas a pedido del cliente, no debes rpeocuparte en perderlas.',
        },
        {
          title: 'GAFAS',
          description: 'las marcas mas reconocidas en gafas de sol estan en nuestra tienda, luce como tus estrellas de hollywood al mejor precio. Nuestro personal te ayudara a elegir lo que mejor se adapte a tus rasgos faciales.',
        },
      ],
    },
    ofertas: {
      visible: false,
      items: [
        {
          title: 'SEMANALES',
          description: 'Todas las semanas publicamos ofertas, dirigidas a publicos y necesidades distintas. Mira en nuestra tienda, qquizas lo que necesitas esta ahora al precio que se ajusta a ti.',
        },
        {
          title: 'DIARIAS',
          description: 'Diariamente publciamos ofertas de ultimo momento, no olvides seguirnos en las redes sociales. Mientras compartes con tus familiares y amigos podrias ver la oferta que estabas esperando.',
        },
        {
          title: 'FESTIVAS',
          description: 'Las fiestas y la familia tambien nos importan, ofrecemos los mejores precios en esas fechas festivas. Ahora en el mes del padre podras encontrar el regalo perfecto para tu viejo.',
        },
      ],
    },
  },
  galeria: {
    visible: false,
    items: [
      {
        index: 0,
        visible: false,
        img: montura0,
        title: 'glasglow-216',
        price: '$100,00',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, debitis consequatur libero tenetur excepturi temporibus numquam unde, tempora cum corporis ut porro, quam perspiciatis vitae quod atque voluptatum id voluptatem.',
      },
      {
        index: 1,
        visible: false,
        img: montura1,
        title: 'river-classic',
        price: '$100,00',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, debitis consequatur libero tenetur excepturi temporibus numquam unde, tempora cum corporis ut porro, quam perspiciatis vitae quod atque voluptatum id voluptatem.',
      },
      {
        index: 2,
        visible: false,
        img: montura2,
        title: 'razor-fill',
        price: '$100,00',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, debitis consequatur libero tenetur excepturi temporibus numquam unde, tempora cum corporis ut porro, quam perspiciatis vitae quod atque voluptatum id voluptatem.',
      },
      {
        index: 3,
        visible: false,
        img: montura3,
        title: 'fun-5748',
        price: '$100,00',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, debitis consequatur libero tenetur excepturi temporibus numquam unde, tempora cum corporis ut porro, quam perspiciatis vitae quod atque voluptatum id voluptatem.',
      },
      {
        index: 4,
        visible: false,
        img: montura4,
        title: 'sanint co & g',
        price: '$100,00',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, debitis consequatur libero tenetur excepturi temporibus numquam unde, tempora cum corporis ut porro, quam perspiciatis vitae quod atque voluptatum id voluptatem.',
      },
      {
        index: 5,
        visible: false,
        img: montura5,
        title: 'trending-2019',
        price: '$100,00',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, debitis consequatur libero tenetur excepturi temporibus numquam unde, tempora cum corporis ut porro, quam perspiciatis vitae quod atque voluptatum id voluptatem.',
      },
    ],
  },
};

const social = (state = initialState.social) => state;
const nav = (state = initialState.nav, action) => {
  if (action.type === NAV_TOGGLE) {
    return Object.assign({}, state, { isOpen: !state.isOpen });
  }
  if (action.type === ON_SCREEN && action.section === sections.nav) {
    return Object.assign({}, state, { visible: true });
  }
  if (action.type === NOT_SCREEN && action.section === sections.nav) {
    return Object.assign({}, state, { visible: false });
  }
  return state;
};
const hero = (state = initialState.hero, action) => {
  if (action.type === ON_SCREEN && action.section === sections.hero) {
    return Object.assign({}, state, { visible: true });
  }
  return state;
};
const about = (state = initialState.about, action) => {
  if (action.type === ABOUT_CLOSE) {
    return true;
  }
  return state;
};
const about2 = (state = initialState.about2, action) => {
  if (action.type === ON_SCREEN && action.section === sections.about2) {
    return true;
  }
  return state;
};

const index = (state = initialState.index, action) => {
  if (action.type === INDEX_PLUS) {
    return action.number;
  }
  return state;
};

const products = (state = initialState.products, action) => {
  if (action.type === ON_SCREEN && action.section === sections.product) {
    return Object.assign({}, state, { visible: true });
  }
  if (action.type === HANDLE_PRODUCTS && action.product === prod.servicios) {
    return Object.assign({}, state, {
      servicios: Object.assign({}, state.servicios, { visible: true }),
      tienda: Object.assign({}, state.tienda, { visible: false }),
      ofertas: Object.assign({}, state.ofertas, { visible: false }),
    });
  }
  if (action.type === HANDLE_PRODUCTS && action.product === prod.tienda) {
    return Object.assign({}, state, {
      servicios: Object.assign({}, state.servicios, { visible: false }),
      tienda: Object.assign({}, state.tienda, { visible: true }),
      ofertas: Object.assign({}, state.ofertas, { visible: false }),
    });
  }
  if (action.type === HANDLE_PRODUCTS && action.product === prod.ofertas) {
    return Object.assign({}, state, {
      servicios: Object.assign({}, state.servicios, { visible: false }),
      tienda: Object.assign({}, state.tienda, { visible: false }),
      ofertas: Object.assign({}, state.ofertas, { visible: true }),
    });
  }
  return state;
};

const galeria = (state = initialState.galeria, action) => {
  if (action.type === ON_SCREEN && action.section === sections.galeria) {
    return Object.assign({}, state, { visible: true });
  }
  if (action.type === HANDLE_INDEX) {
    const newArr = state.items.map(item => (
      item.index === action.index
        ? Object.assign({}, item, { visible: true })
        : Object.assign({}, item, { visible: false })
    ));
    return Object.assign({}, state, { items: newArr });
  }
  return state;
};

const optik = combineReducers({
  social,
  nav,
  hero,
  about,
  about2,
  index,
  products,
  galeria,
});

export default optik;
