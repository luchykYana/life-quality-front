import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPatientsThunk} from '../../store/survey.slice';
import Patient from './Patient/Patient';

const PatientsPage = () => {
    const {allPatients} = useSelector(store => store.surveyReducer)
    const dispatch = useDispatch();
    console.log(allPatients);
    useEffect(() => {
        dispatch(getAllPatientsThunk())
    }, [dispatch])
    return (
        <div>
            {allPatients && allPatients.map((item, index) => <Patient patient={item} key={index}/>)}
        </div>
    );
};

export default PatientsPage;