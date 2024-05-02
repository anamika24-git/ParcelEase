import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import './App.css';
import Login from './component/Login1';
import PhoneNumberForm from './component/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />   

      </Routes>
    </Router>
  );
}

export default App;
