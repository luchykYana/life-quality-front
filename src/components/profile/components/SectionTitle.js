import {Typography} from '@mui/material';

const types = {
    section: {
        variant: 'h5',
        color: '#1279BA'
    },
    field: {
        variant: 'h6',
        color: 'black'
    }
}

const SectionTitle = ({text, type}) => {
    return (
        <Typography variant={types[type].variant} color={types[type].color} fontWeight={'bold'}>{text}</Typography>
    );
};

export default SectionTitle;
