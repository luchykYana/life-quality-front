import {ListItemIcon, ListItemText, MenuItem} from '@mui/material';
import {styles} from './styles';

const MenuListItem = ({icon, text}) => {
    return (
        <MenuItem>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primaryTypographyProps={styles.text}>{text}</ListItemText>
        </MenuItem>
    );
};

export default MenuListItem;