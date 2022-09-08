import { deleteReview, getReview } from '../services/review-api';
import { useState,  useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getFood } from '../services/food-api';
import { useAuthContext } from '../services/useAuthContext';


const ShowReview=()=>{
    const nav=useNavigate();
    const {id}=useParams();
    const [review,setReview]=useState({});
    const [food, setFood]=useState({});
    const { user } = useAuthContext();
    
    const getTheFood=(i)=>{
        getFood(i).then(resp=>setFood(resp.data));
    }

    const getTheReview=()=>{
        getReview(id,user)
        .then(res=>{
            setReview(res.data);
            getTheFood(res.data.food);
        })
    }

    useEffect(getTheReview,[user,setReview]);

    const deleteTheReview=()=>{
        deleteReview(id,user);
        nav('/reviews');
    }

    return(
        <div>
            <h1>{food.name}  </h1>
            Notes: {review.notes}
            <br></br>
            Rating:{review.rating}
            <br></br>
            Difficulty level:{review.level}
            <button onClick={()=>{nav(`/${id}/edit`)}}>Edit</button>
            <button onClick={deleteTheReview}>Delete</button>
            <Link to='/reviews'>Back to Cravings</Link>
        </div>
    )

}

export default ShowReview;