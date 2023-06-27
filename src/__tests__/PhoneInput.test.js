import { render, fireEvent } from "@testing-library/react";
import PhoneInput from "../components/PhoneInput";

describe("PhoneInput", () => {
  it("should update phone number when input value changes", () => {
    const { getByLabelText } = render(<PhoneInput />);
    const input = getByLabelText("(123) 456-7890");

    fireEvent.change(input, { target: { value: "1234567890" } });

    expect(input.value).toBe("(123) 456-7890");
  });

  it("should format phone number on input change", () => {
    const { getByLabelText } = render(<PhoneInput />);
    const input = getByLabelText("(123) 456-7890");

    fireEvent.change(input, { target: { value: "12345678901" } });

    expect(input.value).toBe("(123) 456-78901");
  });

  it("should allow backspace to delete characters", () => {
    const { getByLabelText } = render(<PhoneInput />);
    const input = getByLabelText("(123) 456-7890");

    fireEvent.change(input, { target: { value: "1234567890" } });
    fireEvent.change(input, { target: { value: "123456789" } });

    expect(input.value).toBe("123456789");
  });
});
