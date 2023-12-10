import {useSelector} from 'react-redux';

const SavedResults = () => {
    const {savedResults, patientsSavedResults} = useSelector(store => store.surveyReducer)
    console.log(savedResults);
    console.log(patientsSavedResults);
    return (
        <div>
            Hello
        </div>
    );
};

export default SavedResults;