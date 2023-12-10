import {getDoctorInfoThunk} from '../../store';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {ContactInformation, PersonalInformation, ProfileImage, Qualification} from '../../components/profile';
import {styles} from './styles';

const ProfilePage = () => {
    const {doctor} = useSelector(store => store.authReducer)
    const dispatch = useDispatch()
    useEffect(() => {
            dispatch(getDoctorInfoThunk())
    }, [dispatch])

    return (
        <div>
            {doctor && <div style={styles.content}>
                <div style={{display: 'flex', gap: '80px'}}>
                    <ProfileImage/>
                    <PersonalInformation doctor={doctor}/>
                </div>
                <Qualification doctor={doctor}/>
                <ContactInformation doctor={doctor}/>
            </div>}
        </div>
    );
};

export default ProfilePage;
