export const NAV_TOGGLE = 'NAV_TOGGLE';
export const ON_SCREEN = 'ON_SCREEN';
export const NOT_SCREEN = 'NOT_SCREEN';
export const ABOUT_CLOSE = 'ABOUT_CLOSE';
export const ABOUT2_ON = 'ABOUT2_ON';
export const INDEX_PLUS = 'INDEX_PLUS';
export const HANDLE_PRODUCTS = 'HANDLE_PRODUCTS';
export const HANDLE_INDEX = 'HANDLE_INDEX';
export const sections = {
  nav: 'NAV',
  hero: 'HERO',
  about: 'ABOUT',
  about2: 'ABOUT2',
  product: 'PRODUCT',
  galeria: 'GALERIA',
  direction: 'DIRECTION',
};

export const prod = {
  servicios: 'SERVICIOS',
  tienda: 'TIENDA',
  ofertas: 'OFERTAS',
};

export const navToggle = () => ({ type: NAV_TOGGLE });
export const onScreen = section => ({ type: ON_SCREEN, section });
export const notScreen = section => ({ type: NOT_SCREEN, section });
export const aboutClose = () => ({ type: ABOUT_CLOSE });
export const indexPlus = number => ({ type: INDEX_PLUS, number });
export const handleProducts = product => ({ type: HANDLE_PRODUCTS, product });
export const handleIndex = index => ({ type: HANDLE_INDEX, index });
