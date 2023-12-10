import {axiosService} from './axios.service';
import {URL} from '../configs';

const {auth, doctor} = URL;

export const authService = {
    login: (user) => axiosService.post(auth, user).then(value => value.data),
    getDoctorInfo: (id) => axiosService.get(`${doctor}/${id}`).then(value => value.data)
}