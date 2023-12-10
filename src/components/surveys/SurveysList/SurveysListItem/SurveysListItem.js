import {Accordion, AccordionDetails, AccordionSummary, IconButton, Typography} from '@mui/material';
import {Ballot, Bookmark, BookmarkBorder, ExpandMore} from '@mui/icons-material';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {changeIsSavedThunk, getResultDetailsThunk} from '../../../../store/survey.slice';
import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

const SurveysListItem = ({result}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleOpen = useCallback(() => {
        dispatch(getResultDetailsThunk(result.resultsId))
    }, [dispatch, result.resultsId])

    const toggleSave = useCallback((e) => {
        e.stopPropagation();
        dispatch(changeIsSavedThunk(result.resultsId))
    }, [dispatch, result?.resultsId])

    const more = useCallback(() => {
        navigate(`/surveys/${result?.resultsId}`, {replace: true});
    }, [navigate, result?.resultsId])

    return (
        <Accordion style={styles.accordion} onChange={toggleOpen}>
            <AccordionSummary
                expandIcon={<ExpandMore/>}
                style={styles.summary}
            >
                <IconButton style={styles.icon} onClick={toggleSave}>
                    {result?.isSaved ? <Bookmark/> : <BookmarkBorder/>}
                </IconButton>
                <div style={styles.summaryText}>
                    <div>
                        <div><b>Patient:</b></div>
                        <div>{result?.patientFirstName} {result?.patientLastName}</div>
                    </div>
                    <div>
                        <div><b>Disease:</b></div>
                        <div>{result?.diseaseName}</div>
                    </div>
                    <div>
                        <div><b>Questionnaire:</b></div>
                        <div>{result?.questionnaireName}</div>
                    </div>
                    <div>
                        <div><b>Date:</b></div>
                        <div>{result?.date.split('').splice(0, 10).join('')}</div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails style={styles.details}>
                <Typography>
                    {result?.details ? result?.details : 'The conclusion for this result is:'}
                </Typography>
                <IconButton style={styles.icon} onClick={more}>
                    <Ballot/>
                </IconButton>
            </AccordionDetails>
        </Accordion>
    );
};

export default SurveysListItem;