import { editReview, getReview } from "../services/review-api";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../services/useAuthContext';
import './editreview.css';
import Rating from './Rating';
import Difficulty from "./Difficulty";
import './editreview.css'

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
        const updatedReview={notes: e.target.notes.value, rating: rate, level:dif,tried:e.target.tried.checked, love:e.target.love.checked}
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
        <div className='editRev'>
            <form className='editReview' onSubmit={editTheReview}>
            <div className="editTitle">   <h1>Edit myCraving</h1></div>
            <div className="frm foodlabel">Food: </div>
            <div className="frm foodname"> {data.food_name}</div>

            <div className="frm ratinglabel">Rating: </div>
            <div className="frm ratingscale"><Rating c={5} val={rate} activeColor={'rgba(217, 108, 19)'} inactiveColor={'black'} onChange={handleStarChange}/></div>
            <div className="frm levellabel">Difficulty: </div>
            <div className="frm levelscale"><Difficulty val={dif} onChange={handleLevelChange} /></div>
            <div className="frm lovelabel">Love: </div>
            <div className="frm lovecheck"><input type='checkbox' name='love' defaultChecked={data.love}/></div>
            <div className="frm triedlabel">Tried: </div>
            <div className="frm triedcheck"><input type='checkbox' name='tried' defaultChecked={data.tried}/></div>
            <div className='frm noteslabel'>Notes:</div>
            <div className='frm notesarea'><textarea type='text' name='notes' defaultValue={data.notes}/></div>
            <div className="frm submitbtn"><input type='submit' /> </div>
            </form>
        </div>
    )



}

export default EditReview;