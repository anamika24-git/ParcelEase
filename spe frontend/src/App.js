import React, { useState } from 'react';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Login from './component/Login';
import Topbar from './component/Topbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <div className="App">

      {true && <Topbar />}
      {/* Defining Route path and rendering component as element */}
     <Routes>
      <Route path='/' element={isLoggedIn ? <Home /> : <Login handleLogin={handleLogin} />} />
      <Route path='/about' element={<About />} />
     </Routes>
    </div>
  );
}

export default App;
