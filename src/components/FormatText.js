const FormatText = (props) => {
  const { cardNumber } = props;
  const initialValue = "1234123412341234"


  let formattedText = !cardNumber ? initialValue : cardNumber;

  formattedText.split(' ').join('');
  formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
  return (
    <div>
      {formattedText}
    </div>
  );
}


export default FormatText;