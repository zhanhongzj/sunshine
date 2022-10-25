import { applyMiddleware, createStore, Store, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);
export { store };
