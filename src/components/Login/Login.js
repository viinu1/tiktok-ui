import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loginUser } from '~/ReduxStore/AuthenSlice';
import Button from '../Button';

import styles from './Login.module.scss';
const cx = classNames.bind(styles);

function Login() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password));
    };

    return (
        <div className={cx('wrapper')}>
            <form className={cx('login')}>
                <Link to="/">
                    <FontAwesomeIcon className={cx('icon-arrow-left')} icon={faArrowLeft} />
                </Link>
                <h3 className={cx('heading')}>Đăng nhập</h3>
                <div className={cx('block-input')}>
                    <div className={cx('lable-input')}>Email</div>
                    <input
                        className={cx('input')}
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className={cx('noti')}></span>
                </div>
                <div className={cx('block-input')}>
                    <div className={cx('lable-input')}>Password</div>
                    <input
                        className={cx('input')}
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className={cx('noti')}></span>
                </div>
                <div className={cx('remember')}>
                    <input className={cx('check-box')} type="checkbox" />
                    <p>Remeber me</p>
                </div>
                <Button onClick={handleLogin} className={cx('btn-login')} primary large>
                    Login
                </Button>
                <div className={cx('social')}>
                    <div className={cx('face')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                        <p>FaceBook</p>
                    </div>
                    <div className={cx('google')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faGoogle} />
                        <p>Google</p>
                    </div>
                </div>
                <div className={cx('footer-login')}>
                    Bạn chưa có tài khoản? đăng ký{' '}
                    <Button text small to="/login">
                        Tại Đây
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Login;
