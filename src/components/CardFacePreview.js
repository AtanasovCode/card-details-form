import cardFace from '../assets/images/bg-card-front.png';
import logo from '../assets/images/card-logo.svg';
import FormatText from './FormatText';

const CardFacePreview = (props) => {

    const {cardNumber, fullName, expMonth, expYear } = props;

    return (
        <div className="card-face-container">
            <img 
                src={cardFace}
                className="card"
                alt="card front image"
            />
            <img 
                src={logo}
                alt="logo icon"
                className="logo"
            />
            <div className="card-number">
                <FormatText cardNumber={cardNumber} />
            </div>
            <div className="card-name">
                {fullName}
            </div>
            <div className="exp-date">
                {expMonth}/{expYear}
            </div>
        </div>
    );
}

export default CardFacePreview;