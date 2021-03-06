import _ from 'lodash';
import { READ_EVENTS } from '../actions';

export default (events = {}, action) => {
    // actionの値によってstate.valueの値を変更する
    switch(action.type){
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id');
        default:
            return events;        
    }       
}