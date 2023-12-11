import {useDispatch, useSelector} from 'react-redux';
import {PDFDownloadLink} from '@react-pdf/renderer';
import SectionTitle from '../../components/profile/components/SectionTitle';
import SimpleField from '../../components/profile/components/SimpleField';
import {PdfTextReport} from './PdfTextReport'

import {styles} from './styles';
import Button from '@mui/material/Button';
import {Typography} from '@mui/material';
import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import {getResultAllInfoThunk} from '../../store/survey.slice';

const ResultsPage = () => {
    const {allInfo} = useSelector(store => store.surveyReducer)
    const dispatch = useDispatch();
    const {pathname} = useLocation();

    useEffect(() => {
        if(!allInfo) {
            dispatch(getResultAllInfoThunk(pathname.split('/')[2]));
        }
    }, [allInfo, dispatch, pathname])

    return (
        <div style={styles.section}>
            <div style={styles.content}>
                <div><SectionTitle type={'section'} text={'Survey result'}/></div>
                <div style={styles.content}>
                    {allInfo &&
                        <div style={styles.fields}>
                            <SimpleField width="200px" text={'Patient'}
                                         data={allInfo?.patient.firstName + ' ' + allInfo?.patient.lastName}/>
                            <SimpleField width="500px" text={'Questionnaire'}
                                         data={allInfo?.questionnaire.questionnaireName}/>
                            <SimpleField width="200px" text={'Gender'} data={allInfo?.patient.gender}/>
                            <SimpleField width="200px" text={'Age'}
                                         data={new Date(allInfo?.patient.birthDate).toLocaleDateString('en-GB', {
                                             day: 'numeric',
                                             month: 'numeric',
                                             year: 'numeric'
                                         })}/>
                            <SimpleField width="200px" text={'Date'}
                                         data={new Date(allInfo?.date).toLocaleDateString('en-GB', {
                                             day: 'numeric',
                                             month: 'numeric',
                                             year: 'numeric'
                                         })}/>
                            <Button variant={'contained'} style={{height: '40px', background: '#E28B36', marginTop: '28px'}}>
                                <PDFDownloadLink
                                    document={<PdfTextReport data={allInfo}/>}
                                    fileName="SurveyResults.pdf"
                                    style={{textDecoration: 'none', color: 'white'}}
                                >
                                    {({blob, url, loading, error}) =>
                                        loading ? 'Loading result...' : 'Download result'
                                    }
                                </PDFDownloadLink>
                            </Button>
                        </div>
                    }
                </div>
            </div>
            {(allInfo !== null) && allInfo.resultsPatientAnswers.map((e, index) =>
                (
                    <Typography margin={'5px 0'} key={index}>
                        <span
                            style={styles.bold}>{index + 1}. {e.patientAnswer.questionText}</span> - {e.patientAnswer.answerText}
                    </Typography>
                ))}
        </div>


    );
};

export default ResultsPage;