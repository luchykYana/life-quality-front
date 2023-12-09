import {TextButton} from '../buttons';
import React, {useEffect} from 'react';
import Input from '../Input';
import styles from './styles';
import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import {LoginValidator} from '../../validators/login.validator';
import {loginThunk} from '../../store';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const SignInForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {idUser} = useSelector((store => store.authReducer));

    const {
        handleSubmit, register, formState: {errors}, reset
    } = useForm({resolver: joiResolver(LoginValidator), mode: 'onSubmit'});

    const submit = (user) => {
        dispatch(loginThunk(user));
    }

    useEffect(() => {
        localStorage.setItem('idUser', '0');
    }, [])

    useEffect(() => {
        if(idUser) {
            navigate('/profile', {replace: true})
            reset()
        }
    }, [idUser, navigate, reset])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div style={styles.form}>
                <div style={styles.inputs}>
                    <div style={styles.input}>
                        <Input type={'email'} name={'login'} text={'Email'} register={register}/>
                        <div style={styles.error}>{errors.login?.message}</div>
                    </div>

                    <div style={styles.input}>
                        <Input type={'password'} name={'password'} text={'Password'} register={register}/>
                        <div style={styles.error}>{errors.password?.message}</div>
                    </div>
                </div>
                <TextButton variant={'contained'} text={'login'}/>
            </div>
        </form>
    );
};

export default SignInForm;
