import { useEffect } from 'react';

import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
// import * as VideoService from '~/services/VideoService';
import styles from './Home.module.scss';
import PostVideoAccount from './PostVideoAccount';
import { fectchVideo } from '~/ReduxStore/videosSlice';
import { STATUSES } from '~/ReduxStore/videosSlice';

const cx = classNames.bind(styles);

function Home() {
    const dispatch = useDispatch();
    const { data: videos, status } = useSelector((state) => state.video);
    useEffect(() => {
        dispatch(fectchVideo());
    }, [dispatch]);

    if (status === STATUSES.LOADING) {
        return <h2 className={cx('wrapper')}>Loading....</h2>;
    }
    if (status === STATUSES.ERROR) {
        return <h2 className={cx('wrapper')}>Something Error</h2>;
    }
    return (
        <div className={cx('wrapper')}>
            {videos.map((video, index) => (
                <PostVideoAccount data={video} key={index} />
            ))}
        </div>
    );
}

export default Home;
