
import { useState, useEffect } from 'react';
import { getReviews, deleteReview } from "../services/review-api";
import { useAuthContext } from '../services/useAuthContext';
import { useParams, useNavigate } from 'react-router-dom';
import Difficulty from '../components/Difficulty';



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
            <table>
                <tr> 
                    <th>Food</th>
                    <th>Heart</th>
                    <th>Tried</th>
                    <th>Rating</th>
                    <th>Difficulty</th>
                </tr>
                {reviews&& reviews.map((review)=>{
                    return(
                        <li>
                            <a href={`/reviews/${review._id}`}>{review.food}</a>
                        </li>
                    )
                })}
            </table>
        </div>
    );
}

export default Reviews;