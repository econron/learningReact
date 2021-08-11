import { combineReducers } from 'redux';
import count from './count';

export default combineReducers({ count });
// 複数のreducersをexportする場合の記法
// export default combineRedcers({ foo, bar, bazz });