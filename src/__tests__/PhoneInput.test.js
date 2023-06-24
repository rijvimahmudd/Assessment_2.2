import { cleanup, render, fireEvent, screen } from '@testing-library/react';
import PhoneInput from '../components/PhoneInput';

afterEach(cleanup);

describe('PhoneInput', () => {
  it('formats phone number correctly', () => {
    render(<PhoneInput />);

    const input = screen.getByPlaceholderText('mobile number');

    fireEvent.change(input, { target: { value: '123456' } });
    expect(input.value).toBe('(123) 456');

    fireEvent.change(input, { target: { value: '7890' } });
    expect(input.value).toBe('(789) 0');
  });

  it('does not allow non-digit characters', () => {
    render(<PhoneInput />);

    const input = screen.getByPlaceholderText('mobile number');

    fireEvent.change(input, { target: { value: 'abc123' } });
    expect(input.value).toBe('123');

    fireEvent.change(input, { target: { value: '456def' } });
    expect(input.value).toBe('456');
  });
});