import SectionTitle from './SectionTitle';
import {Divider} from '@mui/material';

const styles = {
    field: {
        border: '1px solid #C1C9D7',
        borderRadius: '3px',
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5px 10px',
        gap: '10px',
        textAlign: 'center'
    }
}

const BlockField = ({text, data}) => {
    return (
        <div style={styles.field}>
            <SectionTitle text={text} type={'field'}/>
            <Divider style={{width: '90%'}} color={'#E08830'}/>
            <div>{data}</div>
        </div>
    );
};

export default BlockField;