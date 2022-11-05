import Card from './Card';
import { netflixData } from './SampleData';
function Cards(){
    /*return(
        <div className='section'>
            <h1 className='heading'>Create View Using Array Map Like A Rest Api</h1>
            <div className='cards'>
               {
                netflixData.map(function(netVal){
                    return(
                        <Card cardImage={netVal.cardImage} cardLink={netVal.cardLink} cardTitle={netVal.cardTitle} cardCategory={netVal.cardCategory}/>
                    )
                })
               } 
            </div>
        </div>
    )*/
    return(
        <div className='section'>
            <h1 className='heading'>Create View Using Array Map Like A Rest Api</h1>
            <div className='cards'>
               {
                netflixData.map((netVal,index)=>{
                    return(
                        <Card cardImage={netVal.cardImage} cardLink={netVal.cardLink} cardTitle={netVal.cardTitle} cardCategory={netVal.cardCategory}/>
                    )
                })
               } 
            </div>
        </div>
    )
}
export default Cards;