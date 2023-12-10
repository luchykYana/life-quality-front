import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {authService} from '../services';
import {toast} from 'react-toastify';

const initialState = {
    idUser: 0,
    doctor: null
}

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (user, {dispatch}) => {
        await authService.login(user).then((data) => {
            dispatch(login(data))
            localStorage.setItem('idUser', data.idUser);
        }).catch((reason) => {
            toast(reason.response.data.outcomeMessage, {type: 'error', position: 'bottom-right'});
        });
    }
)

export const getDoctorInfoThunk = createAsyncThunk(
    'doctor/info',
    async (_, {dispatch}) => {
        const id = localStorage.getItem('idUser');
        await authService.getDoctorInfo(id).then((data) => {
            dispatch(doctorInfo(data))
            localStorage.setItem('user', JSON.stringify(data));
        }).catch((reason) => {
            console.log(reason);
        });
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login: (state, action) => {
            state.idUser = action.payload.idUser;
        },
        doctorInfo: (state, action) => {
            state.doctor = action.payload;
        },
        setUserIdZero: (state, _) => {
            state.idUser = 0;
            localStorage.setItem('idUser', '0');
        }
    }
})

const authReducer = authSlice.reducer;

const {login, doctorInfo, setUserIdZero} = authSlice.actions;

export default authReducer;

export const authActions = {login, doctorInfo, setUserIdZero};