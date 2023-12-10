import {ListItemIcon, ListItemText, MenuItem} from '@mui/material';
import {styles} from './styles';
import {useLocation, useNavigate} from 'react-router-dom';
import {useCallback, useMemo} from 'react';

const MenuListItem = ({icon, text, path}) => {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const active = useMemo(() => path === pathname, [path, pathname]);

    const onClick = useCallback(() => {
        navigate(path, {replace: true})
    }, [navigate, path])

    return (
        <MenuItem
            style={{...styles.menuItem, backgroundColor: active ? '#1279BA' : '', color: active ? 'white' : '#1B295E'}}
            onClick={onClick}>
            <ListItemIcon style={{...styles.menuItemIconColor, color: active ? 'white' : '#1B295E'}}>
                {icon}
            </ListItemIcon>
            <ListItemText primaryTypographyProps={styles.text}>{text}</ListItemText>
        </MenuItem>
    );
};

export default MenuListItem;