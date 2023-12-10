import {useSelector} from 'react-redux';

const ResultsPage = () => {
    const {allInfo} = useSelector(store => store.surveyReducer)

    console.log('ResultsPage');
    console.log(allInfo);
    return (
        <div>ResultsPage</div>
    );
};

export default ResultsPage;