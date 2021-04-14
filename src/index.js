import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import conteurReducer from './reducer/conteurReducer'
import NameReducer from './reducer/NameReducer'

const rootReducer = combineReducers({
  conteurReducer,
  NameReducer
})
const store = createStore(rootReducer)
ReactDOM.render(
  <Provider store={store}>
     <App />
     </Provider>,
  document.getElementById('root')
);
reportWebVitals();
