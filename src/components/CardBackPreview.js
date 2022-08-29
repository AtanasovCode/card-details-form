import cardBack from '../assets/images/bg-card-back.png';

const CardBackPreview = (props) => {
    return (
        <div className="card-back-container">
            <img 
                src={cardBack}
                alt="card back image"
                className="card"
            />
        </div>
    );
}

export default CardBackPreview;