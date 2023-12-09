import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {authService} from '../services';
import {toast} from 'react-toastify';

const initialState = {
    idUser: 0
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

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login: (state, action) => {
            state.idUser = action.payload.idUser;
        }
    }
})

const authReducer = authSlice.reducer;

const {login} = authSlice.actions;

export default authReducer;

export const authActions = {login};