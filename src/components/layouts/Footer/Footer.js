import {styles} from './styles';

const Footer = () => {
    return (
        <div style={styles.footer}>
            <div style={styles.items}>
                <img src="/logo_text_white.png" alt="logo_text" width={40} height={25}/>
            </div>
            <div style={styles.items}>
                Addresses of clinics
            </div>
            <div style={styles.items}>
                Tel: (+380) 96 322 49 42
            </div>
            <div style={styles.items}>
                © 2023 Life Quality
            </div>
        </div>
    );
};

export default Footer;
