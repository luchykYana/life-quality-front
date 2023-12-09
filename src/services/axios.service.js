import axios from 'axios';

import {URL} from '../configs';

export const axiosService = axios.create({
    baseURL: URL.baseURL
});
