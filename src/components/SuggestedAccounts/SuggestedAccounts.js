import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ lable, data = [], onViewChange }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}> {lable}</p>
            {data.map((user, index) => (
                <AccountItem key={index} data={user} />
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
