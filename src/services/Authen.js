import * as httpRequest from '~/utils/httpRequests';

export const postLogin = async () => {
    try {
        const res = await httpRequest.post('auth/login');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
