import { editReview, getReview } from "../services/review-api";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../services/useAuthContext';
import './editreview.css';
import Rating from './Rating';
import Difficulty from "./Difficulty";

const EditReview=()=>{
    const {id} = useParams();
    const nav = useNavigate();
    const [data, setData] = useState({});
    const { user } = useAuthContext();
    const [rate, setRating] = useState(0);
    const [dif, setDifficulty]=useState(0);

    useEffect(()=>{
        getReview(id,user)
        .then(res=>{setData(res.data);setRating(res.data.rating);setDifficulty(res.data.level)})
    },[]);

    const editTheReview = (e) =>{
        e.preventDefault();
        const updatedReview={notes: e.target.notes.value, rating: rate, level:dif}
        editReview(id, updatedReview,user);
        nav(`/reviews/${id}`);
    }

    const handleStarChange=(r)=>{
        setRating(r);
    }
    
    const handleLevelChange=(l)=>{
        setDifficulty(l);
    }

    return(
        <div className='editReview'>
            <h1>Edit myCraving</h1>
            <form onSubmit={editTheReview}>
            <h3>Notes:</h3>
            <br></br>
            <textarea type='text' name='notes' defaultValue={data.notes}/>
            <br></br>
            <Rating c={5} val={rate} activeColor={'yellow'} inactiveColor={'#ddd'} onChange={handleStarChange}/>
            <Difficulty val={dif} onChange={handleLevelChange} />
            Love: <input type='checkbox' name='complete' defaultChecked={data.love}/>
            Tried: <input type='checkbox' name='complete' defaultChecked={data.tried}/>
            <input type='submit' />
            </form>
        </div>
    )



}

export default EditReview;