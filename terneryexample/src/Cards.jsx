import Netflix from './Netflix';
import Amazon from './Amazon';
const favSeries="netflix";
function Cards(){
    return(
        <div className='section'>
            <h1 className='heading'>Create View Using Array Map Like A Rest Api IF ELSE</h1>
            <div className='cards'>
                { /*<FavSeries />*/}
                {(favSeries==="netflix")?<Netflix />:<Amazon />}
            </div>
        </div>
    )
}
export default Cards;