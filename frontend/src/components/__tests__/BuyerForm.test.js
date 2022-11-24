import { render } from '@testing-library/react';
import BuyerForm from '../BuyerForm';

test('should render the name form', () => {
    const { getByTestId } = render(<BuyerForm />);
    const nameInput = getByTestId('name');
    expect(nameInput).toBeTruthy();
});

test('should render the location form', () => {
    const { getByTestId } = render(<BuyerForm />);
    const locationInput = getByTestId('location');
    expect(locationInput).toBeTruthy();
});

test('should render the phoneNo form', () => {
    const { getByTestId } = render(<BuyerForm />);
    const phoneInput = getByTestId('phoneNo');
    expect(phoneInput).toBeTruthy();
});

test('should render the submit button', () => {
    const { getByTestId } = render(<BuyerForm />);
    const submitButton = getByTestId('submit');
    expect(submitButton).toBeTruthy();
});

test('test the name label', () => {
    const { getByTestId } = render(<BuyerForm />);
    const nameLabel = getByTestId('nameLabel');
    expect(nameLabel.textContent).toBe('Name:');
});

test('test the location label', () => {
    const { getByTestId } = render(<BuyerForm />);
    const locationLabel = getByTestId('locationLabel');
    expect(locationLabel.textContent).toBe('Location:');
});

test('test the phone label', () => {
    const { getByTestId } = render(<BuyerForm />);
    const phoneLabel = getByTestId('phoneLabel');
    expect(phoneLabel.textContent).toBe('Phone No:');
});