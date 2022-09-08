import axios from 'axios';
const baseURL = 'https://fifbckend.herokuapp.com/api/review';

export const getReviews= async(user)=>{
    const URL = baseURL;
    if(user===null)
    {
        const res = axios.get(URL);
        return res;
    }
    else{
         const response = await axios.get(URL,{headers:{'Authorization':`Bearer ${user.token}`}});    
         return response;
    }

}

export const getReview= async(id,user)=>{
    const URL = `${baseURL}/${id}`;
    if(user===null)
    {
        const res = axios.get(URL);
        return res;
    }
    else{
         const response = await axios.get(URL,{headers:{'Authorization':`Bearer ${user.token}`}});    
         return response;
    }
}

export const deleteReview=(id,user)=>{
    const URL = `${baseURL}/${id}`;
    const response = axios.delete(URL,{headers:{'Authorization':`Bearer ${user.token}`}});
    return response;
}

export const editReview= async(id,updatedReview,user)=>{
    const URL = `${baseURL}/${id}`;
    const response = axios.put(URL,updatedReview,{headers:{'Authorization':`Bearer ${user.token}`}});
    return response;
}

export const createReview=(review,user)=>{
    const URL = baseURL;
    const response = axios.post(URL, review,{headers:{'Authorization':`Bearer ${user.token}`}});
    return response;
}