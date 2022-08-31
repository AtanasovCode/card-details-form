const handleCardNumber = (text) => {
    let formattedText = text.split(' ').join('');
    if (formattedText.length > 0) {
      formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
    }
    return formattedText;
  }
  

  export default handleCardNumber;