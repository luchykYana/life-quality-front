import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth.slice';
import surveyReducer from './survey.slice';

const store = configureStore({
    reducer: {
        authReducer,
        surveyReducer
    }
});

export {store};