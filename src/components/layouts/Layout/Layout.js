import {Outlet, useLocation} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import {styles} from './styles';
import SideMenu from '../SideMenu';
import {ToastContainer} from 'react-toastify';

const Layout = () => {
    const {pathname} = useLocation()

    return (
        <div>
            <Header/>
            <div style={styles.content}>
                {pathname !== '/' && <SideMenu/>}
                <div style={{...styles.outlet, marginLeft: pathname !== '/' ? '300px' : '0'}}><Outlet/></div>
            </div>
            {pathname !== '/' && <Footer/>}
            <ToastContainer />
        </div>
    );
};

export default Layout;