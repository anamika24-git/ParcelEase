import React  from 'react';
import './Login1.css';
export default function Login() {

    return (
        <>
        <div class="container">
      <div class="logo" >
        <img
          src="iiitb_logo.png"
          width="250px"
          alt=""
        />
      </div>
      <form action="">
        <div class="user-box">
          <input type="text" name="username" required />
          <label>Username</label>
        </div>
        <div class="user-box">
          <input type="Password" name="Password" required />
          <label>Password</label>
          </div>
          <div>
            <button>Login</>
          </div>
          </form>
        </div>
        </>
    );
}