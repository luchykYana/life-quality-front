import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import useFilterForm from './useFilterForm';
import {styles} from './styles';

const FilterForm = () => {
    const {
        handleChangeGender,
        handleChangeDisease,
        handleChangeQuestionnaire,
        diseases,
        questionnaires
    } = useFilterForm();

    return (
        <div style={styles.selects}>
            <FormControl fullWidth>
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
            <FormControl fullWidth>
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
            <FormControl fullWidth>
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
        </div>
    )
};

export default FilterForm;