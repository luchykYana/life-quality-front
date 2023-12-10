import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {surveyService} from '../services';
import {toast} from 'react-toastify';

const initialState = {
    surveys: [],
    filters: {},
    diseases: null,
    questionnaires: null,
    questionnaireSavedResults: null,
    chosenQuestionnaire: '',
    patientsSavedResults: null,
    chosenPatient: '',
    savedResults: null,
    allInfo: null
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

export const getResultAllInfoThunk = createAsyncThunk(
    'surveys/allInfo',
    async (id = {}, {dispatch}) => {
        await surveyService.getResultAllInfo(id).then((data) => {
            dispatch(setAllDetails(data))
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

export const getAllSavedResultsThunk = createAsyncThunk(
    'savedResults/doctorId',
    async (id = {}, {dispatch}) => {
        const doctorId = localStorage.getItem('idUser');
        await surveyService.getAllSavedResults(doctorId).then((data) => {
            dispatch(saveQuestionnaireSavedResults(data[0]))
        }).catch((reason) => {
            toast(reason.response.data.outcomeMessage, {type: 'error', position: 'bottom-right'});
        });
    }
)

export const getAllSavedResultsByQuestionnaireNameThunk = createAsyncThunk(
    'savedResults/questionnaireName',
    async (qName, {dispatch}) => {
        const doctorId = localStorage.getItem('idUser');
        await surveyService.getAllSavedResultsByQuestionnaireName(doctorId, qName).then((data) => {
            dispatch(savePatientsSavedResults(data[0]));
            dispatch(saveChosenQuestionnaireSavedResults(qName));
        }).catch((reason) => {
            toast(reason.response.data.outcomeMessage, {type: 'error', position: 'bottom-right'});
        });
    }
)

export const getAllSavedResultsByQuestionnaireNameAndPatientName = createAsyncThunk(
    'savedResults/patientName',
    async ({qName, pName} = {}, {dispatch}) => {
        const doctorId = localStorage.getItem('idUser');
        await surveyService.getAllSavedResultsByQuestionnaireNameAndPatientName(doctorId, qName, pName).then((data) => {
            dispatch(saveSavedResults(data))
            dispatch(saveChosenPatient(pName))
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
        setAllDetails: (state, action) => {
            state.allInfo = action.payload;
        },
        getAllDisease: (state, action) => {
            state.diseases = action.payload.map((item) => item.diseaseName);
        },
        getAllQuestionnaire: (state, action) => {
            state.questionnaires = action.payload.map((item) => item.questionnaireName);
        },
        saveQuestionnaireSavedResults: (state, action) => {
            state.questionnaireSavedResults = action.payload;
        },
        savePatientsSavedResults: (state, action) => {
            state.patientsSavedResults = action.payload;
        },
        saveChosenQuestionnaireSavedResults: (state, action) => {
            state.chosenQuestionnaire = action.payload;
        },
        saveChosenPatient: (state, action) => {
            state.chosenPatient = action.payload;
        },
        saveSavedResults: (state, action) => {
            state.savedResults = action.payload;
        }
    }
})

const surveyReducer = surveySlice.reducer;

const {
    getByFilter,
    updateSave,
    updateDetails,
    getAllDisease,
    getAllQuestionnaire,
    saveQuestionnaireSavedResults,
    savePatientsSavedResults,
    saveChosenQuestionnaireSavedResults,
    saveChosenPatient,
    saveSavedResults,
    setAllDetails
} = surveySlice.actions;

export default surveyReducer;

export const surveyActions = {
    getByFilter,
    updateSave,
    updateDetails,
    getAllDisease,
    getAllQuestionnaire,
    saveQuestionnaireSavedResults,
    savePatientsSavedResults,
    saveChosenQuestionnaireSavedResults,
    saveChosenPatient,
    saveSavedResults,
    setAllDetails
};