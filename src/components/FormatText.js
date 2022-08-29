const FormatText = (props) => {
    let formattedText = props.cardNumber;
    if (formattedText.length > 0) {
        formattedText.split(' ').join('');
        formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
  }
  console.log(formattedText);
  return (
    <div>
        {formattedText}
    </div>
  );
}


export default FormatText;