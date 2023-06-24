import { useState } from "react";
import formatPhoneNumber from "../utils/formatPhNum";


// Component for the phone input field
const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  // Event handler for input changes
  function handleInputChange(event) {
    const formatted = formatPhoneNumber(event.target.value);
    setPhoneNumber(formatted);
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
      />
      <div>
        <label htmlFor="phone">(123) 456-7890</label>
      </div>
    </div>
  );
}

export default PhoneInput;
