function formatPhoneNumber(value) {
    // Remove all non-digit characters from the input value
    const inputValue = value?.replace(/\D/g, '');
  
    // Format the phone number
    let formattedNumber = '';
    
    for (let i = 0; i < inputValue.length; i++) {
      // Add opening parenthesis after the third digit
      if (i === 3) {
        formattedNumber = '(' + formattedNumber + ') ';
      }
      // Add a hyphen after the sixth digit
      if (i === 6) {
        formattedNumber += '-';
      }
      // Add the digit to the formatted number
      formattedNumber += inputValue[i];
    }

    return formattedNumber
  }

export default formatPhoneNumber;
