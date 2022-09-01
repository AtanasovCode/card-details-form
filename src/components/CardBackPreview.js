import cardBack from '../assets/images/bg-card-back.png';

const CardBackPreview = (props) => {

    const initialValue = "000";
    const {CVC} = props;

    return (
        <div className="card-back-container">
            <img 
                src={cardBack}
                alt="card back image"
                className="card"
            />
            <div className="cvc-container">
                {!CVC ? initialValue : CVC}
            </div>
        </div>
    );
}

export default CardBackPreview;