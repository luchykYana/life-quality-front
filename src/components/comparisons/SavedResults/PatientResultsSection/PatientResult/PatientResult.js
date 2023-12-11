import {IconButton} from '@mui/material';
import {Ballot, DeleteOutlined} from '@mui/icons-material';
import {useCallback} from 'react';
import {changeIsSavedThunk, getResultAllInfoThunk} from '../../../../../store/survey.slice';
import {useDispatch} from 'react-redux';
import {styles} from '../../../../surveys/SurveysList/SurveysListItem/styles';
import {useNavigate} from 'react-router-dom';

const PatientResult = ({result}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteFromSaved = useCallback(() => {
        dispatch(changeIsSavedThunk(result.resultsId))
    }, [dispatch, result.resultsId])

    const more = useCallback(() => {
        dispatch(getResultAllInfoThunk(result?.resultsId));
        navigate(`/surveys/${result?.resultsId}`, {replace: true});
    }, [dispatch, navigate, result?.resultsId])
    return (
        <div style={{
            border: '1px solid #21407E',
            width: '230px',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div><b>Date: </b>{result.date.slice(0, 10)}</div>
            <div
                style={{ display: 'flex'}}
            >{result.isSaved && <IconButton onClick={deleteFromSaved} style={{color: '#21407E'}}>
                <DeleteOutlined/>
            </IconButton>}
                <IconButton style={styles.icon} onClick={more}>
                    <Ballot/>
                </IconButton></div>
        </div>
    );
};

export default PatientResult;