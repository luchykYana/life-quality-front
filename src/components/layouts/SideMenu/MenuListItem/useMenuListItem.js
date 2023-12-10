import {Person, Group, FormatListBulleted, CalendarToday, Forum, Compare, BarChart} from '@mui/icons-material';
import {styles} from './styles';

const useMenuListItem = () => {
    const items = [
        {
            icon: <Person sx={styles.menuItemIconSize}/>,
            text: 'Profile',
            path: '/profile'
        },
        {
            icon: <Group sx={styles.menuItemIconSize}/>,
            text: 'Patients',
            path: '/patients'
        },
        {
            icon: <FormatListBulleted sx={styles.menuItemIconSize}/>,
            text: 'Treatment plan',
            path: '/treatment-plan'
        },
        {
            icon: <CalendarToday sx={styles.menuItemIconSize}/>,
            text: 'Schedule',
            path: '/schedule'
        },
        {
            icon: <Forum sx={styles.menuItemIconSize}/>,
            text: 'Surveys',
            path: '/surveys'
        },
        {
            icon: <Compare sx={styles.menuItemIconSize}/>,
            text: 'Comparison',
            path: '/comparison'
        },
        {
            icon: <BarChart sx={styles.menuItemIconSize}/>,
            text: 'Statistics',
            path: '/statistics'
        }
    ]

    return { items };
}

export default useMenuListItem;
