import {axiosService} from './axios.service';
import {URL} from '../configs';

const {auth} = URL;

export const authService = {
    login: (user) => axiosService.post(auth, user).then(value => value.data),
}