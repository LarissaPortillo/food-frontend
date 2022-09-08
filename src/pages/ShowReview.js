import { deleteReview, getReview } from '../services/review-api';
import { useState,  useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getFood } from '../services/food-api';
import { useAuthContext } from '../services/useAuthContext';
import './showreview.css'

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

    useEffect(getTheReview,[user,setReview,review]);

    const deleteTheReview=()=>{
        deleteReview(id,user);
        nav('/reviews');
    }

    return(
        <body className='showreview'>
        <div className='sreview'>
            <h1>one of my cravings</h1>
            <h3>{food.name}</h3>
            <br></br>
            {review.love? <i className='fas fa-heart'></i>: ''}
            {review.tried? <i className='fas fa-utensils'></i>:<i className="fa-utensils-slash"></i>}
            <br></br>
            
            <img className='showpic' src={food.img}></img>
            <br></br>
            Notes: {review.notes}
            <br></br>
            Rating:{review.rating}
            <br></br>
            Difficulty level:{review.level}
            <br></br>
            <button onClick={()=>{nav(`/${id}/edit`)}}>Edit</button>
            <button onClick={deleteTheReview}>Delete</button>
            <br></br>
            <Link to='/reviews'>Back to Cravings</Link>
        </div>
        </body>
    )

}

export default ShowReview;