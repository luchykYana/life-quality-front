import {styles} from '../../../FilterForm/styles';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import {useEffect, useMemo, useState} from 'react';
import {BarChart} from '@mui/x-charts/BarChart';
import {PDFDownloadLink} from '@react-pdf/renderer';
import Button from '@mui/material/Button';
import {ComparisonPdf} from '../ComparisonPdf';

const DiagramSection = ({results}) => {
    const [parameter, setParameter] = useState('');
    const [values, setValues] = useState([0])
    const [dates, setDates] = useState([''])

    const handleChangeParameter = (event) => {
        setParameter(event.target.value);
    };
    const memoizedQuestionValues = useMemo(() => {
        const values = [];

        results?.forEach((result) => {
            const relevantAnswers = result.resultsPatientAnswers.filter(
                (patientAnswer) => patientAnswer.patientAnswer.questionText === parameter
            );

            relevantAnswers.forEach((answer) => {
                values.push(answer.patientAnswer.answerValue);
            });
        });

        return values;
    }, [parameter, results]);

    useEffect(() => {
        if(memoizedQuestionValues && memoizedQuestionValues.length > 0) {
            setValues(memoizedQuestionValues)
            setDates(results.map(item => item.date))
        } else {
            setValues([0])
            setDates('')
        }
    }, [memoizedQuestionValues, results])

    return (
        <div style={{display: 'flex', marginTop: '100px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '100px'}}>
                {results && <FormControl style={styles.field}>
                <InputLabel>Parameters</InputLabel>
                <Select
                    defaultValue={''}
                    label="Parameter"
                    onChange={handleChangeParameter}
                >
                    {results && results.map((res) => res.resultsPatientAnswers?.map((item, index) => <MenuItem
                        value={item?.patientAnswer?.questionText}
                        key={index}>{item?.patientAnswer?.questionText}</MenuItem>))}
                    <MenuItem value={''}>None</MenuItem>
                </Select>
            </FormControl>}
                <Button variant={'contained'} style={{height: '40px', background: '#E28B36', marginTop: '28px', width: '80%'}}>
                    <PDFDownloadLink
                        document={<ComparisonPdf data={{}}/>}
                        fileName="ComparisonResults.pdf"
                        style={{textDecoration: 'none', color: 'white'}}
                    >
                        {({blob, url, loading, error}) =>
                            loading ? 'Loading result...' : 'Download result'
                        }
                    </PDFDownloadLink>
                </Button>
            </div>
            <BarChart
                xAxis={[{scaleType: 'band', data: dates}]}
                series={[{data: values}]}
                width={500}
                height={300}
            />
        </div>
    );
};

export default DiagramSection;