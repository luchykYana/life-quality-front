import {styles} from './styles';

const Header = () => {
    return (
        <div style={styles.header}>
            <div style={styles.logo}>
                <img src="/logo_image.png" alt="logo-image" width={70} height={70}/>
                <img src="/logo_text.png" alt="logo-tex" width={60} height={40}/>
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Header;