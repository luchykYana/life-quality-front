import Button from '@mui/material/Button';
import styles from './styles';

// variant  = 'text' | 'contained' | 'outlined'

const TextButton = ({variant, text}) => {
    return (
        <Button variant={variant} sx={styles.button} type={'submit'}>{text}</Button>
    );
};

export default TextButton;