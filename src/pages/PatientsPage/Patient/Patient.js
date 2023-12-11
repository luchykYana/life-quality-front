import {Typography} from '@mui/material';

const Patient = ({patient}) => {
    return (
        <div style={{border: '2px solid blue', borderRadius: '5px', padding: '20px', margin: '50px'}}>
            <Typography variant={'h4'} margin={'10px 0'}><b>{patient.firstName} {patient?.lastName}</b></Typography>
            <Typography variant={'h5'} margin={'10px 0'}><b>Disease:</b> {patient.disease.diseaseName}</Typography>
            <Typography variant={'h5'} margin={'10px 0'}><b>Anamnesis:</b> {patient.anamnesis}</Typography>
            <Typography variant={'h5'} margin={'10px 0'}><b>Rehabilitation start date:</b> {patient.rehabilitationStartDate.slice(0, 10)}</Typography>
            <Typography variant={'h5'} margin={'10px 0'}><b>BirthDate:</b> {patient.birthDate.slice(0, 10)}</Typography>
            <Typography variant={'h5'} margin={'10px 0'}><b>Gender:</b> {patient.gender}</Typography>
            <Typography variant={'h5'} margin={'10px 0'}><b>Email:</b> {patient.email}</Typography>
        </div>
    );
};

export default Patient;