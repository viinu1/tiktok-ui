import * as httpRequest from '~/utils/httpRequests';

export const postLogin = async (body = {}) => {
    try {
        const res = await httpRequest.post('auth/login', body);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
