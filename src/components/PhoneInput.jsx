import { useRef, useState } from "react";
import formatPhoneNumber from "../utils/formatPhNum";


// Component for the phone input field
const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const inputRef = useRef(null);

  // Event handler for input changes
  function handleInputChange(event) {
    const inputValue = event.target.value;
    // Handle backspace separately
    if (inputValue.length < phoneNumber.length) {
      setPhoneNumber(inputValue);
    } else {
      const formatted = formatPhoneNumber(inputValue);
      setPhoneNumber(formatted);
    }
  }

  return (
    <div className="container text-center">
      <input
        type="tel"
        id="phone"
        maxLength="16"
        placeholder="mobile number"
        autoComplete="off"
        value={phoneNumber}
        onChange={handleInputChange}
        ref={inputRef}
      />
      <div>
        <label htmlFor="phone">(123) 456-7890</label>
      </div>
    </div>
  );
}

export default PhoneInput;