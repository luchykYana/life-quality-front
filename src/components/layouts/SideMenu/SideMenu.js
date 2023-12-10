import {MenuList, Paper} from '@mui/material';
import {styles} from './styles';
import MenuListItem from './MenuListItem';
import useMenuListItem from './MenuListItem/useMenuListItem';

const SideMenu = () => {
    const {items} = useMenuListItem();
    return (
        <Paper sx={styles.menu}>
            <MenuList>
                {items && items.map(({icon, text, path}) => <MenuListItem icon={icon} text={text} path={path}/>)}
            </MenuList>
        </Paper>
    );
};

export default SideMenu;