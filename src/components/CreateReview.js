
import { createReview } from '../services/review-api';
import { useAuthContext } from '../services/useAuthContext';
import './createrev.css'

const CreateReview=({id,name})=>{
    const { user } = useAuthContext();

    const createTheReview=()=>{
        const review = {food:id,food_name:name}
        if(!user){
            console.log('You must be logged in');
            alert('Oh no! Looks like you need to log in!');
        }
        createReview(review,user);
        alert('You added a craving!');
    }

    return(
        <button onClick={createTheReview} className="c-circle subtle" title="Add to myCravings">C</button>
    )
}

export default CreateReview;
