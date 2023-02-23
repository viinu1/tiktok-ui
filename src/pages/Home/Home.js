import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';

import * as VideoService from '~/services/VideoService';
import styles from './Home.module.scss';
import PostVideoAccount from './PostVideoAccount';
const cx = classNames.bind(styles);

function Home() {
    const [videoResult, setVideoResult] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await VideoService.getVideo();
            setVideoResult(result);
        };
        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <PostVideoAccount data={videoResult} />
        </div>
    );
}

export default Home;
