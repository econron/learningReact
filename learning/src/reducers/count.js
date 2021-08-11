// actions/index.jsからINCREMENT, DECREMENTを取得する
import { INCREMENT, DECREMENT } from '../actions';

// 初期値を設定する
// stateのvalueという値に0がセットされる
const initialState = { value: 0 };

// stateとactionを引数として渡す
// react hooksのreducerと似ている・・・。
export default (state = initialState, action) => {
    // actionの値によってstate.valueの値を変更する
    switch(action.type){
        case INCREMENT:
            return { value: state.value + 1　}
        case DECREMENT:
            return { value: state.value - 1　}
        default:
            return { value: 0　}        
    }       
}