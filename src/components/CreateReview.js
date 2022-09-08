
import { createReview } from '../services/review-api';
import { useAuthContext } from '../services/useAuthContext';
import './createrev.css'

const CreateReview=({id})=>{
    const { user } = useAuthContext();

    const createTheReview=()=>{
        const review = {food:id}
        if(!user){
            console.log('You must be logged in');
            return;
        }
        createReview(review,user);
        
    }

    return(
        <button onClick={createTheReview} className="card-tag card-circle subtle">C</button>
    )
}

export default CreateReview;
