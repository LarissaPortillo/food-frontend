
import { createReview } from '../services/review-api';
import { useAuthContext } from '../services/useAuthContext';

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
        <button onClick={createTheReview}>Try</button>
    )
}

export default CreateReview;
