import { getFoods } from '../services/food-api';
import { useState, useEffect } from 'react';
import CreateReview from '../components/CreateReview'
import { Link } from 'react-router-dom';
import './foods.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Foods=()=>{
    const[foods, setFoods] = useState([]);


    useEffect(()=>{getFoods().then(res=>setFoods(res.data))},[]);

    return(
        <div className='Foods'>
   
                {foods.map((food)=>{
                    return(
                       
                            <div className="card-container">
                                <div className="card u-clearfix">
                                    <div className="card-body">
                                        <span className="card-number subtle">
                                        {/* <FontAwesomeIcon icon="fa-regular far-timer" /> */}
                                            {food.time}min
                                        </span>  
                                        <h2 className="card-title">{food.name}</h2>
                                        <img src={food.img_f} alt="" className="card-media" />
                                        <span className="card-author subtle">{food.studio} : {food.film}</span>
                                      
                                        <br></br>
                                    <div className="card-read"><Link to={`/foods/${food._id}`} className='link'>View Recipe</Link></div>
                                    <CreateReview id={food._id}/>
                                </div>
        
                                </div>
                                <script src="https://kit.fontawesome.com/398a8dbccf.js" crossOrigin="anonymous"></script>
                            </div>
                      
                    )})
                }
          
        </div>
    );
}

export default Foods;