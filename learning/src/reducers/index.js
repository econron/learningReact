import { combineReducers } from 'redux';
import events from './events';

export default combineReducers({ events });
// 複数のreducersをexportする場合の記法
// export default combineRedcers({ foo, bar, bazz });