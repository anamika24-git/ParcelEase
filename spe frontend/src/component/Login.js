import React, { useState } from 'react';

const Login = ({handleLogin}) => {

    const [data, setData] = useState({
        username: "",
        password: ""
    })
    
    const {username,password} = data;
    
    const changeHandler = e => {
      const { name, value } = e.target;
      setData({...data, [name]:value});
    }
    
    const submitHandler = e => {
      e.preventDefault();
      handleLogin();
      console.log("data", data);
    }
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#eee'}}>
          <center>
          <form onSubmit={submitHandler}>
          <input type="text" name="username" value={username} onChange={changeHandler}/><br/>
          <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
          <input type="submit" name="submit"/>
          </form>
          </center>
        </div>
    
      );
    }
    
    export default Login;