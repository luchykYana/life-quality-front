import {styles} from '../../../FilterForm/styles';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import {useEffect, useMemo, useState} from 'react';
import {BarChart} from '@mui/x-charts/BarChart';

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