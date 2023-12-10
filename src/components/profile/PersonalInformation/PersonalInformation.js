import SectionTitle from '../components/SectionTitle';
import SimpleField from '../components/SimpleField';
import {styles} from './styles';

const PersonalInformation = ({doctor}) => {
    return (
        <div style={styles.section}>
            <SectionTitle type={'section'} text={'Personal information'}/>
            <div style={styles.fields}>
                <SimpleField text={'Surname'} data={doctor?.lastName}/>
                <SimpleField text={'Name'} data={doctor?.firstName}/>
                <SimpleField text={'Middle name'} data={doctor?.middleName}/>
                {/*<SimpleField text={'Date of birth'} data={doctor.age}/>*/}
                <SimpleField text={'Gender'} data={doctor?.gender}/>
            </div>
        </div>
    );
};

export default PersonalInformation;
