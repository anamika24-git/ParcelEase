import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import Home from '../component/Home';
import About from '../component/About';
import Login from '../component/Login';
import Topbar from '../component/Topbar';

// Mock the components
jest.mock('../component/Home', () => () => <div>Home Component</div>);
jest.mock('../component/About', () => () => <div>About Component</div>);
jest.mock('../component/Login', () => ({ handleLogin }) => (
  <div>
    Login Component
    <button onClick={handleLogin}>Login</button>
  </div>
));
jest.mock('../component/Topbar', () => () => <div>Topbar Component</div>);

describe('App Component', () => {
  test('should render Login component if not logged in', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Login Component')).toBeInTheDocument();
  });

  test('should render Home component if logged in', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Simulate login by clicking the login button
    fireEvent.click(screen.getByText('Login'));

    // Check if the Home component is rendered after login
    expect(await screen.findByText('Home Component')).toBeInTheDocument();
  });

  test('should render Topbar component if logged in', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Simulate login by clicking the login button
    fireEvent.click(screen.getByText('Login'));

    // Check if the Topbar component is rendered after login
    expect(await screen.findByText('Topbar Component')).toBeInTheDocument();
  });

  test('should render About component on /about path', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('About Component')).toBeInTheDocument();
  });

  test('should not render Topbar component if not logged in', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.queryByText('Topbar Component')).not.toBeInTheDocument();
  });
});
