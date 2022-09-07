import axios from 'axios';
const baseURL = 'http://localhost:3001/api/review';

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

export const getReview=(id)=>{
    const URL = `${baseURL}/${id}`;
    const response = axios.get(URL);
    return response;
}

export const deleteReview=(id)=>{
    const URL = `${baseURL}/${id}`;
    const response = axios.delete(URL);
    return response;
}

export const editReview=(id,updatedReview)=>{
    const URL = `${baseURL}/${id}`;
    const response = axios.put(URL,updatedReview);
    return response;
}

export const createReview=(review,user)=>{
    const URL = baseURL;
    const response = axios.post(URL, review,{headers:{'Authorization':`Bearer ${user.token}`}});
    console.log('created review');
    return response;
}