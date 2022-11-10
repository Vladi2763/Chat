import axios from 'axios';

const checkResponse = (response: any) => {
    return response.data
};
const catchError = (error: any) => error;

const wrapper = (method: "post" | "get" | "put" | "delete", url: string, data?: any) => axios.request({method, url, data}).then(checkResponse).catch(catchError);

export default wrapper;