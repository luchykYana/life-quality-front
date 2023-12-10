import {useDispatch, useSelector} from 'react-redux';
import {getResultsByFilterThunk} from '../../store/survey.slice';
import {useEffect, useState} from 'react';
import {toast} from 'react-toastify';

const useFilterForm = () => {
    const dispatch = useDispatch();
    const {diseases, questionnaires} = useSelector(store => store.surveyReducer)
    const [gender, setGender] = useState(null);
    const [disease, setDisease] = useState(null);
    const [questionnaire, setQuestionnaire] = useState(null);
    const [age, setAge] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        if(endDate && startDate) {
            if(startDate > endDate) {
                toast('Start date must be less than End date', {type: 'error', position: 'bottom-right'})
                return;
            }
        }

        dispatch(getResultsByFilterThunk({
            gender: gender,
            diseaseName: disease,
            questionnaireName: questionnaire,
            minAge: age ? +age.split('-')[0] : null,
            maxAge: age ? +age.split('-')[1] : null,
            beginTime: startDate,
            endTime: endDate
        }))
    }, [dispatch, gender, disease, questionnaire, age, startDate, endDate])

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleChangeDisease = (event) => {
        setDisease(event.target.value);
    };

    const handleChangeQuestionnaire = (event) => {
        setQuestionnaire(event.target.value);
    };

    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };

    const handleChangeStartDate = (event) => {
        const date = new Date(event)
        if(date != 'Invalid Date') {
            setStartDate(new Date(event).toISOString());
        }
    };

    const handleChangeEndDate = (event) => {
        const date = new Date(event)
        if(date != 'Invalid Date') {
            setEndDate(new Date(event).toISOString());
        }
    };

    return {
        diseases,
        questionnaires,
        handleChangeGender,
        handleChangeDisease,
        handleChangeQuestionnaire,
        handleChangeAge,
        handleChangeStartDate,
        handleChangeEndDate
    }
}

export default useFilterForm;
