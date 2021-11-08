import axios from 'axios';
import { SERVER_LINK } from '../Utils/constants';

export default axios.create({
    baseURL: `${SERVER_LINK}/api/`,
    headers: { 'Content-Type': 'application/json' },
});
