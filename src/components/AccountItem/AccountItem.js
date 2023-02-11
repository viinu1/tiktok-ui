import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import classNames from "classnames/bind";
import Image from "~/components/Image";

import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem({data}) {
    return (
        <Link to={`/#${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avata')} src={data.avatar} alt={data.full_name}/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                {data.tick && <FontAwesomeIcon  className={cx('check')} icon={faCircleCheck}/>}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}


AccountItem.propTypes = {
    data:PropTypes.object.isRequired,
}
export default AccountItem;