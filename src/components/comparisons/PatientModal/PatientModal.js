import {useDispatch, useSelector} from 'react-redux';
import {useCallback} from 'react';
import {getAllSavedResultsByQuestionnaireNameAndPatientName} from '../../../store/survey.slice';
import {styles} from '../QuestionnaireModal/styles';
import {Typography} from '@mui/material';
import Button from '@mui/material/Button';

const PatientModal = ({setView}) => {
    const {patientsSavedResults, chosenQuestionnaire} = useSelector(store => store.surveyReducer)
    const dispatch = useDispatch();

    const clickPatient = useCallback((name) => {
        dispatch(getAllSavedResultsByQuestionnaireNameAndPatientName({qName: chosenQuestionnaire, pName: name}));
        setView(2);
    }, [chosenQuestionnaire, dispatch, setView])

    return (
        <div style={styles.modal}>
            <Typography variant={'h4'} fontWeight={'bold'}>Select patient</Typography>
            <div style={styles.items}>
                {patientsSavedResults && Object.keys(patientsSavedResults)
                    .map((key, index) =>
                        <Button
                            variant={'outlined'}
                            key={index}
                            style={styles.button}
                            disabled={!patientsSavedResults[key]}
                            onClick={() => clickPatient(key)}
                        >{key}: {patientsSavedResults[key]}
                        </Button>
                    )}
            </div>
        </div>
    );
};

export default PatientModal;
