import cardFace from '../assets/images/bg-card-front.png';
import logo from '../assets/images/card-logo.svg';
import FormatText from '../components/FormatText';

const CardFacePreview = (props) => {


    const handleCardNumber = (text) => {
        let formattedText = text.split(' ').join('');
        if (formattedText.length > 0) {
          formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
        }
        return formattedText;
      }


    const initialValues = [
        {name: "Jane Appleseed"},
        {number: handleCardNumber("0000000000000000")},
        {month: "00"},
        {year: "00"},
    ]


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
                {!cardNumber ? initialValues.map(initial => initial.number) : cardNumber}
            </div>
            <div className="card-name">
                {!fullName ? initialValues.map(initial => initial.name) : fullName}
            </div>
            <div className="exp-date">
                {!expMonth ? initialValues.map(initial => initial.month) : expMonth}/{!expYear ? initialValues.map(initial => initial.year) : expYear}
            </div>
        </div>
    );
}


export default CardFacePreview;