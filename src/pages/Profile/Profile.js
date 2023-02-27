import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faQuestion, faSeedling } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import video from '~/assets/video/tiktok1.mp4';
import { OptionIcon, ShareICon } from '~/components/Icons';

import { faReact } from '@fortawesome/free-brands-svg-icons';
import * as userService from '~/services/userService';
import Menu from '~/components/Popper/Menu';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const option = [
    {
        icon: <FontAwesomeIcon icon={faSeedling} />,
        title: 'Send message',
        borderb: true,
    },
    {
        icon: <FontAwesomeIcon icon={faReact} />,
        title: 'Report',
        borderb: true,
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Block',
    },
];
function Profile() {
    const [account, setAccount] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await userService.getUser('@phamvanvi');
            setAccount(result);
        };
        fetchApi();
    }, []);
    console.log(account);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <header className={cx('header')}>
                    <Image
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f90cc529e5bacc99b1459a81ab73ca87~c5_100x100.jpeg?x-expires=1676462400&x-signature=gSESXFYS0obT4PKrFsfvopR8uMk%3D"
                        alt=""
                    />
                    <div className={cx('body')}>
                        <div className={cx('nickname')}>
                            <p>datvilla94</p>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </div>
                        <div className={cx('name')}>Đạt Vila</div>
                        <Button className={cx('btn')} primary>
                            Follow
                        </Button>
                    </div>
                    <div className={cx('feature')}>
                        <ShareICon className={cx('share-icon')} />

                        <Menu items={option}>
                            <button className={cx('more-btn')}>
                                <OptionIcon className={cx('option-btn')} />
                            </button>
                        </Menu>
                    </div>
                </header>
                <div className={cx('info')}>
                    <div className={cx('analytis')}>
                        <div className={cx('following')}>
                            <strong className={cx('value')}>12 </strong>
                            <span className={cx('lable')}>Following</span>
                        </div>
                        <div className={cx('follower')}>
                            <strong className={cx('value')}>12 </strong>
                            <span className={cx('lable')}>Follower</span>
                        </div>
                        <div className={cx('likes')}>
                            <strong className={cx('value')}>12 </strong>
                            <span className={cx('lable')}>Likes</span>
                        </div>
                    </div>
                    <div className={cx('des')}>Mãi Yêu Gia Đình Villa</div>
                    <div className={cx('contact')}>
                        <a href="https://www.facebook.com/pham.vi.1293/">
                            https://www.facebook.com/@datvilla94?lang=en
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('video')}>
                <div className={cx('heading')}>
                    <p className={cx('videos')}>Videos</p>
                    <p className={cx('like')}>Liked</p>
                </div>
                <div className={cx('list-video')}>
                    <div className={cx('list-item-video')}>
                        <video width="200px" height="270px" controls>
                            <source src={video} type="video/mp4" />
                        </video>
                        <p className={cx('title-video')}>Video xinh nhất đấy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
