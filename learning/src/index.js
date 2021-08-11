import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { creteStore } from 'redux';
import { Provider } from 'redux';
import reducer from './reducers';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const store = creteStore(reducer);

ReactDOM.render(
  // 先ほどimportしたproviderでappコンポーネントを囲む。
  // providerのprops.storeに引数として、上記で実装したstoreを渡してやる
  // この実装により、コンポーネント全体でreactのstateを管理できるようになる（？）
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
