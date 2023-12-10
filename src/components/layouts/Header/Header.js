import {styles} from './styles';

const Header = () => {
    return (
        <div style={styles.header}>
            <div style={styles.logo}>
                <img src="/logo_image.png" alt="logo-image" width={45} height={50}/>
                <img src="/logo_text.png" alt="logo-text" width={40} height={25}/>
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Header;