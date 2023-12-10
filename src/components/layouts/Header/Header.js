import {styles} from './styles';
import {Logout} from '@mui/icons-material';
import {IconButton} from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom';
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {authActions} from '../../../store';

const Header = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const logout = useCallback(() => {
        dispatch(authActions.setUserIdZero())
        navigate('/', {replace: true});
    }, [dispatch, navigate])

    return (
        <div style={styles.header}>
            <div style={styles.logo}>
                <img src="/logo_image.png" alt="logo" width={45} height={50}/>
                <img src="/logo_text.png" alt="logo-text" width={40} height={25}/>
            </div>
            {pathname !== '/' && <div style={styles.items}>
                <div>Clinic name</div>
                <div>Services</div>
                <div>Contact</div>
                <div>About LQ</div>
            </div>}
            {pathname !== '/' && <div>
                <IconButton onClick={logout}>
                    <Logout style={styles.buttonIcon}/>
                </IconButton>
            </div>
            }
        </div>
    );
};

export default Header;