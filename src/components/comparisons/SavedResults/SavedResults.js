import {useSelector} from 'react-redux';
import PatientResultsSection from './PatientResultsSection';
import DiagramSection from './DiagramSection';

const SavedResults = () => {
    const {savedResults} = useSelector(store => store.surveyReducer)

    return (
        <div>
            <PatientResultsSection results={savedResults}/>
            <DiagramSection results={savedResults}/>
        </div>
    );
};

export default SavedResults;