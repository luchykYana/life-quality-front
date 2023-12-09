import {TextField} from '@mui/material';
import styles from './styles';

const Input = ({type, text, name, register}) => {

    return (
        <div style={styles.textInput}>
            <div style={styles.text}>{text} *</div>
            <TextField type={type} name={name} sx={styles.input} size={'small'} {...register(name)}/>
        </div>
    );
};

export default Input;