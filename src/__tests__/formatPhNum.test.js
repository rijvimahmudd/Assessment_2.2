import formatPhoneNumber from "../utils/formatPhNum";

describe('formatPhoneNumber', () => {
  it('should format the phone number correctly', () => {
    const phoneNumber = '1234567890';
    const formattedNumber = formatPhoneNumber(phoneNumber);
    expect(formattedNumber).toEqual('(123) 456-7890');
  });

  it('should handle empty input', () => {
    const phoneNumber = '';
    const formattedNumber = formatPhoneNumber(phoneNumber);
    expect(formattedNumber).toEqual('');
  });

  it('should handle input with non-digit characters', () => {
    const phoneNumber = '123-456-7890';
    const formattedNumber = formatPhoneNumber(phoneNumber);
    expect(formattedNumber).toEqual('(123) 456-7890');
  });

  it('should handle input with extra digits', () => {
    const phoneNumber = '123456789012345';
    const formattedNumber = formatPhoneNumber(phoneNumber);
    expect(formattedNumber).toBe('(123) 456-789012345');
  });
});
