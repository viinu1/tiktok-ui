import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SuggestedAccounts({ lable, data = [], onViewChange }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}> {lable}</p>
            {data.map((user, index) => (
                <Link to={'/@' + user.nickname} key={index}>
                    <AccountItem data={user} />
                </Link>
            ))}
            <p className={cx('more-btn')} onClick={onViewChange}>
                See all
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    labale: PropTypes.string,
    data: PropTypes.array,
};

export default SuggestedAccounts;
