import SectionTitle from '../components/SectionTitle';
import BlockField from '../components/BlockField';
import {styles} from './styles';

const Qualification = ({doctor}) => {
    return (
        <div style={styles.section}>
            <SectionTitle text={'Qualification'} type={'section'}/>
            <div style={styles.fields}>
                <BlockField text={'Speciality'} data={doctor?.speciality}/>
                <BlockField text={'Type of doctor'} data={doctor?.typeOfDoctor}/>
                <BlockField text={'Education'} data={doctor?.education}/>
            </div>
        </div>
    );
};

export default Qualification;
