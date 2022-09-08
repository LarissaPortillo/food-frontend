///styling ref https://codepen.io/travisw/pen/mOeLpP
import { getFoods } from '../services/food-api';
import { useState, useEffect } from 'react';
import CreateReview from '../components/CreateReview'
import { Link } from 'react-router-dom';
import './foods.css';

const Foods=()=>{
    const[foods, setFoods] = useState([]);

    useEffect(()=>{getFoods().then(res=>setFoods(res.data))},[]);

    return(
        <div className='foods'>
   
                {foods.map((food)=>{
                    return(
                            <div className="c-container">
                              
                                    <div className="c-body">
                                        <span className="c-number subtle">
                                            <i className='fas fa-clock'></i> 
                                             {food.time}min
                                        </span>  
                                        <h2 className="c-title">{food.name}</h2>
                                        <img src={food.img_f} alt="" className="c-media" />
                                        <span className="c-author subtle">{food.studio} : {food.film}</span>
                                      
                                        <br></br>
                                        <div className="c-read"><Link to={`/foods/${food._id}`} className='link'>View Recipe</Link></div>
                                        <CreateReview id={food._id} name={food.name}/>
                                    </div>
                                    
                            </div>
                      
                    )})
                }
          
        </div>
    );
}

export default Foods;