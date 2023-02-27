import PropTypes from 'prop-types';
import {
    faCheckCircle,
    faComment,
    faHeart,
    faMusic,
    faShare,
    faPlay,
    faPause,
    faVolumeHigh,
    faVolumeMute,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from '../Home.module.scss';
import ReactPlayer from 'react-player';
import { useState } from 'react';
const cx = classNames.bind(styles);

function PostVideoAccount({ data }) {
    const [isToggled, setIsToggled] = useState(false);
    const [volume, setVolume] = useState(50);
    const [isVolumeCheck, setIsVolumeCheck] = useState(false);

    const handleVolume = (event) => {
        setVolume(event.target.value);

        if (Number(volume) <= 4) {
            setIsVolumeCheck(!isVolumeCheck);
        }
    };

    const handleClick = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className={cx('post')}>
            <div>
                <header className={cx('header')}>
                    <Image className={cx('avatar')} src={data.user.avatar} alt={data.user.nickname} />
                    <div className={cx('body')}>
                        <div className={cx('nickname')}>{data.user.nickname}</div>
                        {data.user.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        <div className={cx('name')}>
                            {data.user.first_name} {data.user.last_name}
                        </div>
                        <div className={cx('content')}>{data.description}</div>
                        <div className={cx('link-music')}>
                            {data.music === '' ? (
                                ''
                            ) : (
                                <a href="hhh">
                                    <FontAwesomeIcon icon={faMusic} />
                                    {data.music}
                                </a>
                            )}
                        </div>
                    </div>
                    <div className={cx('btn')}>
                        <Button small outline>
                            Folow
                        </Button>
                    </div>
                </header>
                <div className={cx('list-video')}>
                    <div className={cx('item-video')}>
                        <ReactPlayer
                            width="100%"
                            height="100%"
                            playing={isToggled}
                            className={cx('video')}
                            url={data.file_url}
                            poster={data.thumb_url}
                            volume={parseFloat(volume / 100)}
                            loop
                        />

                        <div className={cx('control')}>
                            <p>
                                {isToggled ? (
                                    <FontAwesomeIcon
                                        onClick={handleClick}
                                        className={cx('icon-pause')}
                                        icon={faPause}
                                    />
                                ) : (
                                    <FontAwesomeIcon onClick={handleClick} className={cx('icon-play')} icon={faPlay} />
                                )}
                            </p>
                            <div className={cx('volume')}>
                                <input
                                    type="range"
                                    className={cx('volume-range')}
                                    min="0"
                                    max="100"
                                    value={volume}
                                    onChange={handleVolume}
                                />

                                {isVolumeCheck ? (
                                    <FontAwesomeIcon className={cx('icon-volume-mute')} icon={faVolumeMute} />
                                ) : (
                                    <FontAwesomeIcon className={cx('icon-volume-high')} icon={faVolumeHigh} />
                                )}
                            </div>
                        </div>
                        <div className={cx('interact')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                            <p>{data.likes_count}</p>
                            <FontAwesomeIcon className={cx('icon')} icon={faComment} />
                            <p>{data.comments_count}</p>
                            <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                            <p>{data.shares_count}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

PostVideoAccount.propTypes = {
    data: PropTypes.object,
};

export default PostVideoAccount;
