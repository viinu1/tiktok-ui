import { useRef } from 'react';
import PropTypes from 'prop-types';
import { faCheckCircle, faComment, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Image from '~/components/Image';

import styles from '../Home.module.scss';
const cx = classNames.bind(styles);

function PostVideoAccount({ data }) {
    const likeRef = useRef();
    const handleClick = () => {};

    return (
        <div className={cx('post')}>
            {data.map((item) => (
                <div key={item.id}>
                    <header className={cx('header')}>
                        <Image className={cx('avatar')} src={item.user.avatar} alt={item.user.nickname} />
                        <div className={cx('body')}>
                            <div className={cx('nickname')}>{item.user.nickname}</div>
                            {item.user.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                            <div className={cx('name')}>
                                {item.user.first_name} {item.user.last_name}
                            </div>
                            <div className={cx('content')}>{item.description}</div>
                            <div className={cx('link-music')}>
                                {item.music === '' ? (
                                    ''
                                ) : (
                                    <a href="hhh">
                                        <FontAwesomeIcon icon={faMusic} />
                                        {item.music}
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
                            <video src={item.file_url} controls width={300} height={450}></video>
                            <div className={cx('interact')}>
                                <FontAwesomeIcon onClick={handleClick} className={cx('icon')} icon={faHeart} />
                                <p>{item.likes_count}</p>
                                <FontAwesomeIcon className={cx('icon')} icon={faComment} />
                                <p>{item.comments_count}</p>
                                <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                                <p>{item.shares_count}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

PostVideoAccount.propTypes = {
    data: PropTypes.array,
};

export default PostVideoAccount;
