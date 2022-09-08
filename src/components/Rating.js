// ref from https://codepen.io/rajeshpillai/pen/poyRaNN?editors=0110
const Rating=({c,val,inactiveColor='#ddd',size=24, activeColor='yellow', onChange})=>{
    const stars =  Array.from({length: c}, () => '🟊');

    const handleChange=(val)=>{
        onChange(val+1);
    }

    return(
        <div>
            <h3>Rating:</h3>
            {stars.map((s,i)=>{
                let style=inactiveColor;
                if(i < val){
                    style=activeColor;
                }
                return(
                    <span className={'star'} key={i} style={{color:style,width:size,fontSize:size}} onClick={()=>handleChange(i)}>{s}</span>
                )
            })}
            {val}
        </div>
    )

}
export default Rating;