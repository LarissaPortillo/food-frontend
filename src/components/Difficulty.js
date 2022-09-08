const Difficulty=({val,onChange})=>{

    const handleChange=(val)=>{
        onChange(val);
    }

    return(
        <div class="dif">
            <input type="radio" class="radio" name="progress" value={25} id="twentyfive"  checked={val===25} onClick={()=>handleChange(25)} />
            <label for="twentyfive" class="label">easy</label>

            <input type="radio" class="radio" name="progress" value={50} id="fifty"  checked={val===50} onClick={()=>handleChange(50)}/>
            <label for="fifty" class="label">moderate</label>

            <input type="radio" class="radio" name="progress" value={75} id="seventyfive" checked={val===75} onClick={()=>handleChange(75)}/>
            <label for="seventyfive" class="label">hard</label>

            <input type="radio" class="radio" name="progress" value={100} id="onehundred" checked={val===100}  onClick={()=>handleChange(100)}/>
            <label for="onehundred" class="label">insane</label>

            <div class="progress">
                <div class="progress-bar"></div>
            </div>     

        </div>
    )
}

export default Difficulty;