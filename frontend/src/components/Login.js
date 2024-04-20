import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://127.00.1:5000/Login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await res.json();

      if (data.status === 400 || !data) {
        window.alert("Invalid Registration");
      } else {
        window.alert("Login successfull || Good Day ||");
        navigate('/');
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const bad = function(e) {
     window.alert("Thanku for comfomation ");
  }

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="box">
          <div className="part">
            
            <div className="from">
              <form onSubmit={handleLogin}>
                <label htmlFor="text">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  id='email'
                  placeholder='Enter your Email'
                />
                <label htmlFor="text">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id='password'
                  placeholder='Enter your Password'
                />
                <button type="submit" className='button'>Submit</button>
              </form>
            </div>

            <div className="text">
              <h1>Eduford International Territories Websites</h1>
              <ul class="territories-list">
                <li><a onClick={bad}>Australia-</a></li>
                <li><a onClick={bad}>Botswana--</a></li>
                <li><a onClick={bad}>Eduford---</a></li>
                <li><a onClick={bad}>KenyaKenya</a></li>
                <li><a onClick={bad}>NewZealand</a></li>
                <li><a onClick={bad}>Singapore--</a></li>
                <li><a onClick={bad}>Malaysia---</a></li>
                <li><a onClick={bad}>Mauritius--</a></li>
                <li><a onClick={bad}>Seychelles-</a></li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Login;
