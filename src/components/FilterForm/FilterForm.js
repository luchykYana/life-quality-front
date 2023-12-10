import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import useFilterForm from './useFilterForm';
import {styles} from './styles';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

const FilterForm = () => {
    const {
        handleChangeGender,
        handleChangeDisease,
        handleChangeQuestionnaire,
        handleChangeAge,
        handleChangeStartDate,
        handleChangeEndDate,
        diseases,
        questionnaires
    } = useFilterForm();

    return (
        <div style={styles.selects}>
            <FormControl style={styles.field}>
                <InputLabel>Gender</InputLabel>
                <Select
                    defaultValue={''}
                    label="Gender"
                    onChange={handleChangeGender}
                >
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                    <MenuItem value={''}>Both</MenuItem>
                </Select>
            </FormControl>
            <FormControl style={styles.field}>
                <InputLabel>Disease</InputLabel>
                <Select
                    defaultValue={''}
                    label="Disease"
                    onChange={handleChangeDisease}
                >
                    {diseases && diseases.map((item, index) => <MenuItem value={item} key={index}>{item}</MenuItem>)}
                    <MenuItem value={''}>All</MenuItem>
                </Select>
            </FormControl>
            <FormControl style={styles.field}>
                <InputLabel>Questionnaire</InputLabel>
                <Select
                    defaultValue={''}
                    label="Questionnaire"
                    onChange={handleChangeQuestionnaire}
                >
                    {questionnaires && questionnaires.map((item, index) => <MenuItem value={item}
                                                                                     key={index}>{item}</MenuItem>)}
                    <MenuItem value={''}>All</MenuItem>
                </Select>
            </FormControl>
            <FormControl style={styles.field}>
                <InputLabel>Age</InputLabel>
                <Select
                    defaultValue={''}
                    label="Age"
                    onChange={handleChangeAge}
                >
                    <MenuItem value={'18-30'}>18-30 years</MenuItem>
                    <MenuItem value={'30-40'}>30-40 years</MenuItem>
                    <MenuItem value={'40-50'}>40-50 years</MenuItem>
                    <MenuItem value={'50-60'}>50-60 years</MenuItem>
                    <MenuItem value={'60-70'}>60-70 years</MenuItem>
                    <MenuItem value={'70-80'}>70-80 years</MenuItem>
                    <MenuItem value={'80-90'}>80-90 years</MenuItem>
                    <MenuItem value={'90-100'}>90-100 years</MenuItem>
                    <MenuItem value={''}>all</MenuItem>
                </Select>
            </FormControl>
            <FormControl style={styles.field}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Start date" onChange={handleChangeStartDate}/>
                </LocalizationProvider>
            </FormControl>
            <FormControl style={styles.field}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="End date" onChange={handleChangeEndDate}/>
                </LocalizationProvider>
            </FormControl>
        </div>
    )
};

export default FilterForm;