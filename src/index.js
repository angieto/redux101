import React from 'react';
import ReactDOM from 'react-dom';

// import from redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'; // helps inject store into components

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const store = createStore(rootReducer);

// use Provider to hook the store to the application
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
