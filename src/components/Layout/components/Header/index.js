import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark,faSpinner, faMagnifyingGlass, faEllipsisVertical, faLanguage, faQuestionCircle, faKeyboard, faPaperPlane, faMessage, faUpload, faCloud, faCloudUpload, faCoins, faCamera, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
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
        children:{
            title:'Language',
            data:[
                {
                    code:'en',
                    title:"English",
                },
                {
                    code:'vi',
                    title:"Tiếng việt",
                },
                {
                    code:'china',
                    title:"Trung Quốc",
                },
            ],
        },
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

const userMenu = [
    {
        icon:<FontAwesomeIcon icon={faUser}/>,
        title:'View profile',
        to:'/vanvi'
    },
    {
        icon:<FontAwesomeIcon icon={faCoins}/>,
        title:'Get Coins',
        to:'/coins'
    },
    {
        icon:<FontAwesomeIcon icon={faCamera}/>,
        title:'LIVE Studio',
    },
    {
        icon:<FontAwesomeIcon icon={faGear}/>,
        title:'Setting',
        to:'/setting'
    },
    ...MENU_ITEMS,
    {
        icon:<FontAwesomeIcon icon={faSignOut}/>,
        title:'Logout',
        to:'/logout',
        separate:true,
    }

]
function Header() {
    // const iconOption = cx('option-icon')
    // tippy('iconOption',{
    //     content:'hello'
    // })
    const currentUser =  true
    const [searchResult,setSearchResult] = useState([])
    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([])
        },0)
    },[])

    //handle logic
    const handleOnChange = (menuItem)=>{
        console.log(menuItem);
    }

    
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div>
                    <img src={images.logo} alt="Tiktok"/>
                </div>

                <HeadlessTippy
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
                </HeadlessTippy>

                {/* cần sữ lý login */}

                
                <div className={cx('actions')}>
                    {currentUser ? (
                            <>
                                <Tippy delay={[0,200]} content="Upload Video" placement='bottom'>
                                    <button className={cx('action-btn')}>
                                        <FontAwesomeIcon icon={faCloudUpload}/>
                                    </button>
                                </Tippy>
                                <Tippy delay={[0,200]} content="Message" placement='bottom'>
                                    <button className={cx('action-btn')}>
                                        <FontAwesomeIcon icon={faMessage}/>
                                    </button>
                                </Tippy>

                            </>
                    ) : (
                            <>
                                <Button text>Upload</Button>
                                <Button primary>Login</Button>
                                
                            </>
                    )}
                    <Menu items = {currentUser ? userMenu : MENU_ITEMS} onChange={handleOnChange}>
                        {currentUser ?(
                            <img className={cx('user-avata')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4807ff80effbfefd179fcde414eb2efd~c5_100x100.jpeg?x-expires=1676041200&x-signature=v4NR6NtvxYNAOfs5rHYjXxlY0Qg%3D" alt='avata'/>
                        ):(
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}/>
                            </button>
                        )}
                        
                    </Menu>
                </div>

                
            </div>
        </header>
     );
}

export default Header;