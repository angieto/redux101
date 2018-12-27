import React from 'react';
import ReactDOM from 'react-dom';

// import from redux
import { createStore } from 'redux';
import { Provider } from 'react-redux'; // helps inject store into components

import reducer from './store/reducer';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

// use Provider to hook the store to the application
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
