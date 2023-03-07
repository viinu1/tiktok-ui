import * as httpRequest from '~/utils/httpRequests';

export const postLogin = async (username, password) => {
    try {
        const res = await httpRequest.post('auth/login', { username, password });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
