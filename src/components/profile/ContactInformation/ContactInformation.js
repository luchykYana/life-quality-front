import SimpleField from '../components/SimpleField';
import {styles} from './styles';
import SectionTitle from '../components/SectionTitle';

const ContactInformation = ({doctor}) => {
    return (
        <div style={styles.section}>
            <SectionTitle text={'Contact information'} type={'section'}/>
            <div style={styles.fields}>
                <SimpleField text={'Email'} data={doctor?.email} width={'250px'}/>
                <SimpleField text={'Mobile phone'} data={doctor?.phone} width={'250px'}/>
            </div>
        </div>
    );
};

export default ContactInformation;
