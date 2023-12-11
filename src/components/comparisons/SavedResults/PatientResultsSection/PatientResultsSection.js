import PatientResult from './PatientResult';
import {Typography} from '@mui/material';
import {styles} from './styles';

const PatientResultsSection = ({results}) => {
    return (
        <div>
            <div style={styles.title}>
                <Typography variant={'h5'}
                            fontWeight={'bold'}>{results && results[0].patient['firstName']} {results && results[0].patient['lastName']}</Typography>
                <Typography variant={'h5'}
                            fontWeight={'bold'}>{results && results[0].questionnaire['questionnaireName']}</Typography>
            </div>
            <div style={{display: 'flex', gap: '50px'}}>{results && results.map((item, index) => item.isSaved &&
                <PatientResult result={item} key={index}/>)}</div>
        </div>
    );
};

export default PatientResultsSection;