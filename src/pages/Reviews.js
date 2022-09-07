
import { useState, useEffect } from 'react';
import { getReviews } from "../services/review-api";
import { useAuthContext } from '../services/useAuthContext';



const Reviews=()=>{
    const [reviews, setReviews] = useState([]);
    const { user } = useAuthContext();

    useEffect(()=>{  
        if(user){
            getReviews(user)
            .then(res=> setReviews(res.data));
            console.log('res',reviews)
        }
    },[setReviews,user]);
   
    
    return(
        <div>
            <ul>
                {reviews&& reviews.map((review)=>{
                    return(
                        <li>
                            <a href={`/review/${review._id}`}>{review.food}</a> 
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Reviews;