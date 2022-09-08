import { getFood } from '../services/food-api';
import { useState,  useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const ShowFood=()=>{
    const nav = useNavigate();
    const { id } = useParams();
    const[food, setFood] = useState([]);

    useEffect(()=>{getFood(id).then(res=>setFood(res.data))},[]);

    return(
        <div>
            {food.name}
            blah blah blha
        </div>
    );
}

export default ShowFood;