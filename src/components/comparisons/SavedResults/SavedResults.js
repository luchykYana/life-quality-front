import {useSelector} from 'react-redux';
import PatientResultsSection from './PatientResultsSection';
import DiagramSection from './DiagramSection';
import {Typography} from '@mui/material';

const SavedResults = () => {
    const {savedResults} = useSelector(store => store.surveyReducer)

    return (
        <div>{savedResults && savedResults.length > 0 && <div>
            <PatientResultsSection results={savedResults}/>
            <DiagramSection results={savedResults}/>
        </div>}
            {(!savedResults || savedResults.length < 1) && <Typography variant={'h4'} fontWeight={'bold'} marginTop={'30px'}>Nothing for comparison!</Typography>}
        </div>
    );
};

export default SavedResults;