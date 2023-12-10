import {axiosService} from './axios.service';
import {URL} from '../configs';

const {results, filter, save, result, diseases, questionnaire} = URL;

export const surveyService = {
    getSurveysByFilter: (filters) => axiosService.get(`${results}/${filter}`, { params: filters }).then(value => value.data),
    changeIsSaved: (id) => axiosService.put(`${results}/${save}/${id}`).then(value => value.data),
    getResultDetails: (id) => axiosService.get(`${result}/${id}`).then(value => value.data),
    getAllDisease: () => axiosService.get(diseases).then(value => value.data),
    getAllQuestionnaire: () => axiosService.get(questionnaire).then(value => value.data),
}