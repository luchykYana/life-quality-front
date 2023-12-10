import {useState} from 'react';
import {PatientModal, QuestionnaireModal, SavedResults} from '../../components/comparisons';

const ComparisonPage = () => {
    const [view, setView] = useState(0);

    return (
        <div>
            {!view && <QuestionnaireModal setView={setView}/>}
            {view === 1 && <PatientModal setView={setView}/>}
            {view === 2 && <SavedResults/>}
        </div>
    );
};

export default ComparisonPage;