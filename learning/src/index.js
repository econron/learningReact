import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import EventsIndex from './components/EventsIndex';
import reportWebVitals from './reportWebVitals';

// createStoreメソッドの第二引数としてthunkをapplyMiddlewareメソッドに渡してやることで
// thunkを適用できる。
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  // 先ほどimportしたproviderでappコンポーネントを囲む。
  // providerのprops.storeに引数として、上記で実装したstoreを渡してやる
  // この実装により、コンポーネント全体でreactのstateを管理できるようになる（？）
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
