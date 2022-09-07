import './home.scss';

const Home=()=>{
    return( 
        <div className="contain">  
            <div className="contain__film"> 
                F<img className="contain__film-img" src="https://media.discordapp.net/attachments/1006944172730761286/1016912887765278740/My_project-3_2.png" alt="" />
                <img className="contain__film-img" src="https://media.discordapp.net/attachments/1006944172730761286/1016912887765278740/My_project-3_2.png" alt="" />D
            </div>    
            <img className="contain__camera-img" src="https://media.discordapp.net/attachments/1006944172730761286/1016918231342129204/Frame_3.png?width=1076&height=796" alt=""></img>
            <p className="contain__p">in</p>
            <p className='contain__p-film'> FILM</p>
        </div> 
    )
}

export default Home;