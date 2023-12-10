import {styles} from './styles';
import SurveysListItem from './SurveysListItem';

const SurveysList = ({results}) => {
    return (
        <div style={styles.content}>
            {results && results.map((result) => <SurveysListItem result={result} key={result.resultsId}/>)}
        </div>
    );
};

export default SurveysList;
