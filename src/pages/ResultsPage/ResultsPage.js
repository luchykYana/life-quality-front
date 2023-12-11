import {useSelector} from 'react-redux';
import {PDFDownloadLink} from '@react-pdf/renderer';
import SectionTitle from '../../components/profile/components/SectionTitle';
import SimpleField from '../../components/profile/components/SimpleField';
import {PdfTextReport} from './PdfTextReport'

import {styles} from './styles';

const ResultsPage = () => {
    const {allInfo} = useSelector(store => store.surveyReducer)

    console.log('ResultsPage');
    console.log(allInfo);
    return (
        <div style={styles.section}>
            <div style={styles.content}>
            <div><SectionTitle type={'section'} text={'Survey result'}/></div>
                <div style={styles.content}>
                { allInfo &&
                    <div style={styles.fields}>
                    <SimpleField width='200px' text={'Patient'} data={allInfo?.patient.firstName + ' ' + allInfo?.patient.lastName}/>
                    <SimpleField width='500px' text={'Questionnaire'} data={allInfo?.questionnaire.questionnaireName}/>
                    <SimpleField width='200px' text={'Gender'} data={allInfo?.patient.gender}/>
                    <SimpleField width='200px' text={'Age'} data={new Date(allInfo?.patient.birthDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' })}/>
                    <SimpleField width='200px' text={'Date'} data={new Date(allInfo?.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' })}/>
                    {/* зроби потім ту кнопку кнопкою і гарною будь ласка бо я вже хочу спати і фронт це жесть */}
                    <button style={styles.downloadButton}>
                        <PDFDownloadLink
                            document={<PdfTextReport data={allInfo}/>}
                            fileName="SurveyResults.pdf"
                        >
                            {({blob, url, loading, error}) =>
                                loading ? 'Loading result...' : 'Download result'
                            }
                        </PDFDownloadLink>
                    </button>
                    </div>
                }
                </div>  
            </div>
            {(allInfo !== null) && allInfo.resultsPatientAnswers.map((e, index) => 
            (
                <div>
                    <span style={styles.bold}>{index + 1}. {e.patientAnswer.questionText}</span> - {e.patientAnswer.answerText}
                </div>
            ))}
        </div>
        

    );
};

export default ResultsPage;