import Netflix from './Netflix';
import Amazon from './Amazon';
const favSeries="netflix";
const FavSeries=()=>{
    if(favSeries==="netflix"){
        return <Netflix />
    }else{
        return <Amazon />
    }
}
function Cards(){
    return(
        <div className='section'>
            <h1 className='heading'>Create View Using Array Map Like A Rest Api IF ELSE</h1>
            <div className='cards'>
                <FavSeries />
            </div>
        </div>
    )
}
export default Cards;