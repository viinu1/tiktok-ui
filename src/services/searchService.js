import * as httpRequest from '~/utils/httpRequests';

export const search = async (q,type='less')=>{
    try {
        const res = await httpRequest.get('users/search',{
            params:{
                q,
                type:'less',
            }
        });
        return res.data
    } catch (error) {
        console.log(error);
    }

}