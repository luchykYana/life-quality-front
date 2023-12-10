import {Filters, SurveysList} from '../../components/surveys';
import {styles} from './styles';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getResultsByFilterThunk} from '../../store/survey.slice';

const SurveysPage = () => {
    const {idUser} = useSelector(store => store.authReducer)
    const {surveys} = useSelector(store => store.surveyReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getResultsByFilterThunk({}))
    }, [dispatch, idUser])

    return (
        <div style={styles.content}>
            <Filters/>
            <SurveysList results={surveys}/>
        </div>
    );
};

export default SurveysPage;
