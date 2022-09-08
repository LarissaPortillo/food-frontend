import axios from 'axios';
const baseURL = 'https://fifbckend.herokuapp.com/food';

export const getFoods=()=>{
    const URL = baseURL;
    const response = axios.get(URL);
    return response;
}

export const getFood=(id)=>{
    const URL = `${baseURL}/${id}`;
    const response = axios.get(URL);
    return response; 
}

export const deleteFood=(id)=>{
    const URL = `${baseURL}/${id}`;
    const response = axios.delete(URL);
    return response;
}

export const editFood=(id,updatedFood)=>{
    const URL = `${baseURL}/${id}`;
    const response = axios.put(URL, updatedFood);
    return response;
}

export const createFood=(food)=>{
    const URL = baseURL;
    const response = axios.post(URL);
    return response;
}