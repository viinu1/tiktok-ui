import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import * as userService from '~/services/userService';
import styles from './Following.module.scss';
import ItemVideo from './ItemVideo';
const cx = classNames.bind(styles);

function Following() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await userService.getSuggested({ page: 1, perPage: 15 });
            setUsers(result);
        };

        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            {users.map((user, index) => (
                <ItemVideo data={user} key={index} />
            ))}
        </div>
    );
}

export default Following;
