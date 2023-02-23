import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    const renderPreView = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <div className={cx('preview')}>
                    <AccountPreview data={data} />
                </div>
            </PopperWrapper>
        </div>
    );
    return (
        <span>
            <HeadlessTippy
                interactive
                delay={[800, 0]}
                placement="bottom-start"
                offset={[-10, 0]}
                render={renderPreView}
            >
                <div className={cx('account-item')}>
                    <img className={cx('avata')} src={data.avatar} alt={data.name} />
                    <div className={cx('item-info')}>
                        <h4 className={cx('nickname')}>
                            {data.nickname}
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </h4>
                        <p className={cx('name')}>
                            {data.first_name} {data.last_name}
                        </p>
                    </div>
                </div>
            </HeadlessTippy>
        </span>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object,
};
export default AccountItem;
