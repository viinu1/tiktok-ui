import * as httpRequest from '~/utils/httpRequests';

export const getSuggested = async ({ page, perPage }) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getUser = async (id) => {
    try {
        const res = await httpRequest.get(`users/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
