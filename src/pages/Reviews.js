
import { useState, useEffect } from 'react';
import { getReviews, deleteReview } from "../services/review-api";
import { useAuthContext } from '../services/useAuthContext';
import './reviews.css';
import { useNavigate, Navigate } from 'react-router-dom';

const Reviews=()=>{
    const [reviews, setReviews] = useState([]);
    const { user } = useAuthContext();
    const nav = useNavigate();
   

    const dif={25:'easy',50:'moderate',75:'hard', 100:'insane'};

    useEffect(()=>{  
        if(user){
            getReviews(user)
            .then(res=> setReviews(res.data));
            console.log('res',reviews)
        }
    },[setReviews,user]);

    // useEffect(()=>{nav('/reviews')},deleteReview);

    // const deleteTheReview=(i)=>{
    //     deleteReview(i,user);
    // }

    
    return(
        <body className='reviewsbody'>
        <div className='reviews'>
           
        <section>
  
        <h1 className='craves'>My Cravings</h1>
        <div className="tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">
            <thead>
                <tr>
                <th>Food</th>
                <th>Rating</th>
                <th>Difficulty</th>
                <th>Tried</th>
                <th>Heart</th>
                <th>Actions</th>
                </tr>
            </thead>
            </table>
        </div>
        <div className="tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
            <tbody>
            {reviews&& reviews.map((review)=>{
                            return(
                                <tr>
                                    <td>
                                        <a className='aname' href={`/reviews/${review._id}`}>{review.food_name}</a>
                                    </td>
                                    <td>{review.rating? review.rating:0}</td>
                                    <td>{review.level? dif[review.level]:0}</td>
                                    <td>{review.tried?'yes':'no'}</td>
                                    <td>{review.love?'yes':'no'}</td>  
                                    <td>
                                        <button onClick={()=>{nav(`/${review._id}/edit`)}}>Edit</button>
    
                                        <button  onClick={()=>{deleteReview(review._id,user);<Navigate to='/reviews' />}}>Delete</button>
                                    </td>
                                </tr>
                            )
                    })}
                    
            </tbody>
            </table>
        </div>
        </section>

        </div>
        </body>
    );
}

export default Reviews;