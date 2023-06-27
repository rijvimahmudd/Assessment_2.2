import React, { useState, useRef, useEffect } from "react";
import formatPhoneNumber from "../utils/formatPhNum";

const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const inputElement = inputRef.current;

    const handleInput = (event) => {
      const input = event.target.value;
      const formatted = formatPhoneNumber(input);
      setPhoneNumber(formatted);

      const originalLength = input.length;
      const caretPosition = inputElement.selectionStart || 0;

      // Calculate the adjusted caret position
      let newCaretPosition = caretPosition + (formatted.length - originalLength);

      // Handle caret position when removing digits from the middle
      if (originalLength > formatted.length) {
        const removedDigits = input.slice(
          caretPosition - (originalLength - formatted.length),
          caretPosition
        );
        newCaretPosition -= removedDigits.replace(/[^0-9]/g, "").length;
      }

      // Set the adjusted caret position
      // setTimeout(() => {
        inputElement.setSelectionRange(newCaretPosition, newCaretPosition);
      // }, 0);
    };

    inputElement.addEventListener("input", handleInput);

    return () => {
      inputElement.removeEventListener("input", handleInput);
    };
  }, []);

  return (
    <div className="container text-center">
      <input
        type="tel"
        id="phone"
        maxLength="16"
        placeholder="mobile number"
        autoComplete="off"
        value={phoneNumber}
        onChange={() => {}}
        ref={inputRef}
      />
      <div>
        <label htmlFor="phone">(123) 456-7890</label>
      </div>
    </div>
  );
};

export default PhoneInput;
