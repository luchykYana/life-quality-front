import {axiosService} from './axios.service';
import {URL} from '../configs';

const {results, filter, save, result, diseases, questionnaire, savedResults, patient} = URL;

export const surveyService = {
    getSurveysByFilter: (filters) => axiosService.get(`${results}/${filter}`, { params: filters }).then(value => value.data),
    changeIsSaved: (id) => axiosService.put(`${results}/${save}/${id}`).then(value => value.data),
    getResultAllInfo: (id) => axiosService.get(`${results}/${id}`).then(value => value.data),
    getResultDetails: (id) => axiosService.get(`${result}/${id}`).then(value => value.data),
    getAllDisease: () => axiosService.get(diseases).then(value => value.data),
    getAllPatients: () => axiosService.get(patient).then(value => value.data),
    getAllQuestionnaire: () => axiosService.get(questionnaire).then(value => value.data),
    getAllSavedResults: (doctorId) => axiosService.get(`${results}/${savedResults}/${doctorId}`).then(value => value.data),
    getAllSavedResultsByQuestionnaireName: (doctorId, questionnaireName) => axiosService.get(`${results}/${savedResults}/${doctorId}/${questionnaireName}`).then(value => value.data),
    getAllSavedResultsByQuestionnaireNameAndPatientName: (doctorId, questionnaireName, patientName) => axiosService.get(`${results}/${savedResults}/${doctorId}/${questionnaireName}/${patientName}`).then(value => value.data),
}