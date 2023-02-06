import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark,faSpinner, faMagnifyingGlass, faEllipsisVertical, faLanguage, faQuestionCircle, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss'
import images from '~/assets/images';
import { Wrapper as PopperWrapper} from '~/components/Popper'
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';



const cx = classNames.bind(styles)
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon ={faLanguage}/>,
        title:'English',
    },
    {
        icon:<FontAwesomeIcon icon={faQuestionCircle}/>,
        title:'Feedback and help',
        to:'/feedback'
    },
    {
        icon:<FontAwesomeIcon icon={faKeyboard}/>,
        title:'Keyboard shortcuts',
    },
]

function Header() {
    // const iconOption = cx('option-icon')
    // tippy('iconOption',{
    //     content:'hello'
    // })
    const [searchResult,setSearchResult] = useState([])
    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([])
        },0)
    },[])

    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div>
                    <img src={images.logo} alt="Tiktok"/>
                </div>

                <Tippy
                    interactive
                    placement='bottom'
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h3 className={cx('search-title')}>
                                        Account
                                    </h3>
                                    <AccountItem/>
                                    <AccountItem/>
                                    <AccountItem/>                                  
                                </PopperWrapper>
                            </div>
                      )}
                >
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
                </Tippy>

                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Login</Button>
                    
                    <Menu items = {MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </button>
                    </Menu>
                    

                </div>
            </div>
        </header>
     );
}

export default Header;