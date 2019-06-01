import { createStore } from 'redux';
import optik from './reducers';

const store = createStore(optik);

export default store;
