import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllSavedResultsByQuestionnaireNameThunk, getAllSavedResultsThunk} from '../../../store/survey.slice';
import Button from '@mui/material/Button';
import {styles} from './styles';
import {Typography} from '@mui/material';

const QuestionnaireModal = ({setView}) => {
    const {questionnaireSavedResults} = useSelector(store => store.surveyReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllSavedResultsThunk())
    }, [dispatch])

    const clickQuestionnaire = useCallback((name) => {
        dispatch(getAllSavedResultsByQuestionnaireNameThunk(name));
        setView(1);
    }, [dispatch, setView])

    return (
        <div style={styles.modal}>
            <Typography variant={'h4'} fontWeight={'bold'}>Select questionnaire</Typography>
            <div style={styles.items}>
                {questionnaireSavedResults && Object.keys(questionnaireSavedResults)
                    .map((key, index) =>
                        <Button
                            variant={'outlined'}
                            key={index}
                            style={styles.button}
                            disabled={!questionnaireSavedResults[key]}
                            onClick={() => clickQuestionnaire(key)}
                        >{key}: {questionnaireSavedResults[key]}
                        </Button>
                    )}
            </div>
        </div>
    );
};

export default QuestionnaireModal;