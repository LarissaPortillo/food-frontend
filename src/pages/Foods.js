import { getFoods } from '../services/food-api';
import { useState, useEffect } from 'react';
import CreateReview from '../components/CreateReview'

const Foods=()=>{
    const[foods, setFoods] = useState([]);


    useEffect(()=>{getFoods().then(res=>setFoods(res.data))},[]);

    return(
        <div>
            <ul>
                {foods.map((food)=>{
                    return(
                        <li><a href={`${food._id}`}>{food.food}</a> <CreateReview id={food._id} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Foods;