import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark,faSpinner, faMagnifyingGlass,faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss'
import images from '~/assets/images';


const cx = classNames.bind(styles)

function Header() {
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div>
                    <img src={images.logo} alt="Tiktok"/>
                </div>

                <div className={cx('search')}>
                    <input type='text' placeholder='Searh Account and Video' spellCheck={false}/>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                    <FontAwesomeIcon className={cx('spinner')} icon={faSpinner}/>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>

                <div className={cx('actions')}>
                    <button>
                        <FontAwesomeIcon icon={faPlus}/>
                        Tải lên
                    </button>
                    <button>
                        Đăng nhập
                    </button>
                </div>
            </div>
        </header>
     );
}

export default Header;