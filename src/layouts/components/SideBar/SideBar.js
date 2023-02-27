import { useState, useEffect } from 'react';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeIconACtive,
    UserGroupIconActive,
    LiveIconActive,
} from '~/components/Icons';

import config from '~/config';

import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';
import { SuggestedAccounts } from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);
const INIT_PAGE = 1;
const PER_PAGE = 5;

function SideBar() {
    const [page, setPage] = useState(INIT_PAGE);

    const [suggestedUser, setSuggestedUser] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await userService.getSuggested({ page, perPage: PER_PAGE });
            setSuggestedUser((prevUser) => [...prevUser, ...result]);
        };

        fetchApi();
    }, [page]);

    const handleViewChange = () => {
        setPage(page + 1);
    };

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconACtive />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupIconActive />}
                />
                <MenuItem title="LiVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
            </Menu>
            <SuggestedAccounts lable="Suggested Account" data={suggestedUser} onViewChange={handleViewChange} />
            <SuggestedAccounts lable="Following Account" />
        </aside>
    );
}

export default SideBar;
