
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faLanguage, faQuestionCircle, faKeyboard, faCoins, faCamera, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss'
import images from '~/assets/images';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/image';
import Search from '../Search';



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
    const currentUser =  true
    //handle logic
    const handleOnChange = (menuItem)=>{
        console.log(menuItem);
    }

    
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div>
                    <Link to='/'><img src={images.logo} alt="Tiktok"/></Link>
                </div>

                {/* Component Search */}
                <Search/>

                {/* cần sữ lý login */}

                
                <div className={cx('actions')}>
                    {currentUser ? (
                            <>
                            
                                <Button text>Upload</Button>
                                
                                <Tippy delay={[0,200]} content="Message" placement='bottom'>
                                    <button className={cx('action-btn')}>
                                        <MessageIcon/>
                                    </button>
                                </Tippy>
                                <Tippy delay={[0,200]} content="Inbox" placement='bottom'>
                                    <button attrs={'19'} className={cx('action-btn','action-before')}>
                                        <InboxIcon/>
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
                            <Image
                                className={cx('user-avata')}
                                src="https://p116-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4807ff80effbfefd179fcde414eb2efd~c5_100x100.jpeg?x-expires=1676041200&x-signature=v4NR6NtvxYNAOfs5rHYjXxlY0Qg%3D"
                                alt='avata'
                                // fallBack = {images.noImage}
                            />
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