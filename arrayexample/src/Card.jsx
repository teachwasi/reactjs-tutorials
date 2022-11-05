function Card(props){
    return(
      <div className='card'>
        <div className='cardInner'>
          <img src={props.cardImage} alt={props.cardTitle} className='card_img' />
          <div className='card_info'>
            <span className='card_category'>{props.cardCategory}</span>
            <h3 className='card_title'>{props.cardTitle}</h3>
            <a href={props.cardLink} target="_blank" rel="noreferrer">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    )
}
export default Card;