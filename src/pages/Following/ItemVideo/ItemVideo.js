import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
// import ReactPlayer from 'react-player';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from '../Following.module.scss';

const cx = classNames.bind(styles);

function ItemVideo({ data }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const handleMouseOver = () => {
        setIsPlaying(true);
    };
    const handleMouseOut = () => {
        setIsPlaying(false);
    };
    return (
        <div className={cx('list-account')} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <ReactPlayer
                width="100%"
                height="100%"
                className={cx('item-video')}
                url={data.popular_video.file_url}
                muted
                loop
                playing={isPlaying}
            />
            <div className={cx('info')}>
                <Image src={data.avatar} className={cx('avatar')} />
                <div className={cx('name')}>
                    {data.first_name} {data.last_name}
                </div>
                <div>
                    <div className={cx('nickname')}>{data.nickname}</div>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheck} />}
                </div>
                <Button className={cx('btn')} primary>
                    Follow
                </Button>
            </div>
        </div>
    );
}

export default ItemVideo;
