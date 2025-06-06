import React from 'react';
import ReactDOM from 'react-dom';
import './styles/responsive.css';
import './styles/style.css';
import './index.css';
import './styles/base.css';
import './styles/grid.css';
import './styles/overview.css';
import './styles/watch.css';
import './styles/icon/fontawesome/css/all.min.css';

import { Provider } from 'react-redux'
import store from './store/store'

import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   // <React.StrictMode>
//   // </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
