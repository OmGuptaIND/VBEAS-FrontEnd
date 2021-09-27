import axios from 'axios';
import { SERVER_LINK } from '../Utils/constants';


// const hostLink = 'https://vbeasbackend.herokuapp.com';
// const link = 'http://localhost:8000/api/';
export default axios.create({
    baseURL: `${SERVER_LINK}/api/`,
    headers: { 'Content-Type': 'application/json' },
});