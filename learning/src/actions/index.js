import axios from 'axios';

export const READ_EVENTS = 'READ_EVENTS';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';
const AXIOS_URL = ROOT_URL + '/events' + QUERYSTRING;

// thunkを利用することで、actionの代わりに関数を返すことができるようになる。
export const readEvents = () => async dispatch => {
    const response = await axios.get(AXIOS_URL);
    dispatch({type: 'READ_EVENTS', response });
}