import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {surveyService} from '../services';
import {toast} from 'react-toastify';

const initialState = {
    surveys: [],
    filters: {},
    diseases: null,
    questionnaires: null
}

export const getResultsByFilterThunk = createAsyncThunk(
    'surveys/getByFilter',
    async (filters = {}, {dispatch}) => {
        const id = localStorage.getItem('idUser')
        await surveyService.getSurveysByFilter({...filters, doctorId: id}).then((data) => {
            dispatch(getByFilter(data));
            dispatch(getAllDiseasesThunk());
            dispatch(getAllQuestionnaireThunk());
            localStorage.setItem('surveys', JSON.stringify(data));
        }).catch((reason) => {
            toast(reason.response.data.outcomeMessage, {type: 'error', position: 'bottom-right'});
        });
    }
)

export const changeIsSavedThunk = createAsyncThunk(
    'surveys/changeIsSaved',
    async (id = {}, {dispatch}) => {
        await surveyService.changeIsSaved(id).then((data) => {
            dispatch(updateSave(id))
            localStorage.setItem('surveys', JSON.stringify(data));
        }).catch((reason) => {
            toast(reason.response.data.outcomeMessage, {type: 'error', position: 'bottom-right'});
        });
    }
)

export const getResultDetailsThunk = createAsyncThunk(
    'surveys/details',
    async (id = {}, {dispatch}) => {
        await surveyService.getResultDetails(id).then((data) => {
            dispatch(updateDetails({id, data}))
        }).catch((reason) => {
            toast(reason.response.data.outcomeMessage, {type: 'error', position: 'bottom-right'});
        });
    }
)

export const getAllDiseasesThunk = createAsyncThunk(
    'diseases/all',
    async (id = {}, {dispatch}) => {
        await surveyService.getAllDisease().then((data) => {
            dispatch(getAllDisease(data))
        }).catch((reason) => {
            toast(reason.response.data.outcomeMessage, {type: 'error', position: 'bottom-right'});
        });
    }
)

export const getAllQuestionnaireThunk = createAsyncThunk(
    'questionnaires/all',
    async (id = {}, {dispatch}) => {
        await surveyService.getAllQuestionnaire().then((data) => {
            dispatch(getAllQuestionnaire(data))
        }).catch((reason) => {
            toast(reason.response.data.outcomeMessage, {type: 'error', position: 'bottom-right'});
        });
    }
)

const surveySlice = createSlice({
    name: 'surveySlice',
    initialState,
    reducers: {
        getByFilter: (state, action) => {
            state.surveys = action.payload;
        },
        updateSave: (state, action) => {
            const index = state.surveys.findIndex((result) => result?.resultsId === action.payload);
            state.surveys[index].isSaved = !state.surveys[index].isSaved;
        },
        updateDetails: (state, action) => {
            const index = state.surveys.findIndex((result) => result?.resultsId === action.payload.id);
            state.surveys[index].details = action.payload.data;
            localStorage.setItem('surveys', JSON.stringify(state.surveys));
        },
        getAllDisease: (state, action) => {
            state.diseases = action.payload.map((item) => item.diseaseName);
        },
        getAllQuestionnaire: (state, action) => {
            state.questionnaires = action.payload.map((item) => item.questionnaireName);
        }
    }
})

const surveyReducer = surveySlice.reducer;

const {getByFilter, updateSave, updateDetails, getAllDisease, getAllQuestionnaire} = surveySlice.actions;

export default surveyReducer;

export const surveyActions = {getByFilter, updateSave, updateDetails, getAllDisease, getAllQuestionnaire};