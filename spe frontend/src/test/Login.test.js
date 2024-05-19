import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Login from '../component/Login';

describe('Login Component', () => {
  const mockHandleLogin = jest.fn();

  beforeEach(() => {
    render(<Login handleLogin={mockHandleLogin} />);
  });

  test('renders the login form', () => {
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('shows an error message for incorrect credentials', async () => {
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'wronguser' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'wrongpass' } });
    
    await act(async () => {
      fireEvent.click(screen.getByText('Login'));
    });

    expect(screen.getByText('Invalid username or password')).toBeInTheDocument();
    expect(mockHandleLogin).not.toHaveBeenCalled();
  });

  test('calls handleLogin on correct credentials', async () => {
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'parcel' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'parcel' } });
    
    await act(async () => {
      fireEvent.click(screen.getByText('Login'));
    });

    expect(mockHandleLogin).toHaveBeenCalled();
    expect(screen.queryByText('Invalid username or password')).not.toBeInTheDocument();
  });

  test('clears error message on successful login', async () => {
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'wronguser' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'wrongpass' } });
    
    await act(async () => {
      fireEvent.click(screen.getByText('Login'));
    });

    expect(screen.getByText('Invalid username or password')).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'parcel' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'parcel' } });
    
    await act(async () => {
      fireEvent.click(screen.getByText('Login'));
    });

    expect(mockHandleLogin).toHaveBeenCalled();
    expect(screen.queryByText('Invalid username or password')).not.toBeInTheDocument();
  });
});
