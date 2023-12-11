import {styles} from '../../../FilterForm/styles';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import {useEffect, useMemo, useState, useRef} from 'react';
import {BarChart} from '@mui/x-charts/BarChart';
import {PDFDownloadLink} from '@react-pdf/renderer';
import Button from '@mui/material/Button';
import {ComparisonPdf} from '../ComparisonPdf';
import html2canvas from 'html2canvas';
import ReactBarChart from './ReactBarChart';

const DiagramSection = ({results}) => {
    const [parameter, setParameter] = useState('');
    const [values, setValues] = useState([0])
    const [dates, setDates] = useState([''])
    const [chartData, setChartData] = useState(null)

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
            setDates(results.map(item => item.date.slice(0, 10)))
        } else {
            setValues([0])
            setDates('')
        }
    }, [memoizedQuestionValues, results])


    // useEffect(() => {
    //     console.log('useEffect triggered');
    //     if (chartRef.current) {
    //       html2canvas(chartRef.current).then((canvas) => {
    //         // `canvas` contains the chart as an image
    //         const dataURL = canvas.toDataURL();
    //         console.log(dataURL);
    //         setChartData(dataURL);
    //         // Now you can use `dataURL` as needed (e.g., display it, save it, etc.)
    //       });
    //     }
    //   }, [values]);

    //   const getChartImage = () => {
    //     console.log('function triggered');
    //     if (chartRef.current) {
    //       html2canvas(chartRef.current).then((canvas) => {
    //         // `canvas` contains the chart as an image
    //         const dataURL = canvas.toDataURL();
    //         console.log(dataURL);
    //         setChartData(dataURL);
    //         // Now you can use `dataURL` as needed (e.g., display it, save it, etc.)
    //       });
    //     }
    //   }

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
                        document={<ComparisonPdf data={results ?? []} chartData={chartData ?? []}/>}
                        fileName="ComparisonResults.pdf"
                        style={{textDecoration: 'none', color: 'white'}}
                    >
                        {({blob, url, loading, error}) =>
                            loading ? 'Loading result...' : 'Download comparison'
                        }
                    </PDFDownloadLink>
                </Button>
            </div>
            <BarChart
                xAxis={[{scaleType: 'band', data: dates}]}
                series={[{data: values}]}
                width={500}
                height={300}
                colors={['#21407E']}
            />
            <div style={{ visibility: 'hidden' }}>
                <ReactBarChart
                
                    data = {results}
                    field1={dates}
                    field2={values}
                    setDiagram={setChartData}
                />
            </div>
        </div>
    );
};

export default DiagramSection;