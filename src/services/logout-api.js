import { useAuthContext } from "./useAuthContext";
// import { getReviews } from "./review-api"

export const useLogout=()=>{
    const { dispatch } = useAuthContext();

    const logout=()=>{
        //remove user from storage
        localStorage.removeItem('user');

        //dispatch logout action
        dispatch({type:'LOGOUT'});
        // getReviews(null);
    }
    return {logout};
}