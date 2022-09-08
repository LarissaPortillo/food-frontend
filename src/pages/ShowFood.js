import { getFood } from '../services/food-api';
import { useState,  useEffect } from 'react'
import { useParams,useNavigate, Link } from 'react-router-dom'
import './showfood.css'
import CreateReview from '../components/CreateReview';

const ShowFood=()=>{
    const nav = useNavigate();
    const { id } = useParams();
    const[food, setFood] = useState([]);
    const[ingredients,setIngredients] = useState([]);

    useEffect(()=>{getFood(id).then(res=>{setFood(res.data); setIngredients(res.data.ingredients)})},[]);

    console.log(food.instructions)
    return(
        <body className='showfoodbody'>
        <div className='showfood'>

            <div className='iicontain'>

            <div className='foodtitle'><p className='fnam'>{food.name}</p> <CreateReview id={food._id} name={food.name}/></div>
            <div className='filmstudio'>Studio: {food.studio} &nbsp;&nbsp;&nbsp;&nbsp; Film: {food.film} </div>
            <div className='pic'><img className='foodimg' src={food.img}></img></div>
            <div className='time'><i className='fas fa-clock'></i> {food.time} minutes &nbsp;&nbsp;&nbsp;&nbsp; <a href={food.source}>source</a></div>
            <div className='intructions'>{food.instructions} </div>
            <div className='ingredients'>
                <ul>
                {ingredients.map((f)=>{
                    return(
                        <li>
                        {f.a===0? '': `${f.a} ${f.m} `} {f.i} {f.e? `, ${f.e}`:''}
                        </li>
                        
                    );
                })}
                </ul>
                
            </div>
            <div className='last'>  <Link class='foodlink' to='/foods'>→</Link> </div>
        </div>
        </div>
        </body>
    );
}

export default ShowFood;