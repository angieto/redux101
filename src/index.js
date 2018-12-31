import React from 'react';
import ReactDOM from 'react-dom';

// import from redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
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

// create a middleware w/ nested functions
const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] is dispatching this action from index.js:', action);
            const result = next(action);
            console.log('[Middleware]\'s next/updated state:', store.getState());
            return result;
        }
    }
}

const store = createStore(rootReducer, applyMiddleware(logger));

// use Provider to hook the store to the application
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
