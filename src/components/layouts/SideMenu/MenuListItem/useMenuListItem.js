import {Person, Group, FormatListBulleted, CalendarToday, Forum, Compare, BarChart} from '@mui/icons-material';

const useMenuListItem = () => {
    const items = [
        {
            icon: <Person fontSize="large"/>,
            text: 'Profile'
        },
        {
            icon: <Group fontSize="large"/>,
            text: 'Patients'
        },
        {
            icon: <FormatListBulleted fontSize="large"/>,
            text: 'Treatment plan'
        },
        {
            icon: <CalendarToday fontSize="large"/>,
            text: 'Schedule'
        },
        {
            icon: <Forum fontSize="large"/>,
            text: 'Surveys'
        },
        {
            icon: <Compare fontSize="large"/>,
            text: 'Comparison'
        },
        {
            icon: <BarChart fontSize="large"/>,
            text: 'Statistics'
        }
    ]

    return { items };
}

export default useMenuListItem;
