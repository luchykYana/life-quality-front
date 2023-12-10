import {useDispatch, useSelector} from 'react-redux';
import {getResultsByFilterThunk} from '../../store/survey.slice';
import {useEffect, useState} from 'react';

const useFilterForm = () => {
    const dispatch = useDispatch();
    const {diseases, questionnaires} = useSelector(store => store.surveyReducer)
    const [gender, setGender] = useState(null);
    const [disease, setDisease] = useState(null);
    const [questionnaire, setQuestionnaire] = useState(null);

    useEffect(() => {
        dispatch(getResultsByFilterThunk({
            gender: gender,
            diseaseName: disease,
            questionnaireName: questionnaire
        }))
    }, [dispatch, gender, disease, questionnaire])

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleChangeDisease = (event) => {
        setDisease(event.target.value);
    };

    const handleChangeQuestionnaire = (event) => {
        setQuestionnaire(event.target.value);
    };

    return {
        diseases,
        questionnaires,
        handleChangeGender,
        handleChangeDisease,
        handleChangeQuestionnaire
    }
}

export default useFilterForm;
