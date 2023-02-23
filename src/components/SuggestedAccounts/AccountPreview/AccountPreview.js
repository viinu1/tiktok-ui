import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image className={cx('avata')} src={data.avatar} alt={data.name} />

                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </header>

            <div className={cx('body')}>
                <h4 className={cx('nickname')}>
                    {data.nickname}
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <p className={cx('name')}>{data.name}</p>
                <div className={cx('analytis')}>
                    <div className={cx('follower')}>
                        <strong className={cx('value')}>{data.followers_count} </strong>
                        <span className={cx('lable')}>Follower</span>
                    </div>
                    <div className={cx('likes')}>
                        <strong className={cx('value')}>{data.likes_count} </strong>
                        <span className={cx('lable')}>Likes</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object,
};
export default AccountPreview;
