import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo2 from './assets/logo-white.png';

const New = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: ""
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://127.00.1:5000/New', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      const data = await res.json();
      if (data.status === 422 || !data) {
        window.alert("Invalid registration");
      } else {
        window.alert("Successful registration");
        navigate('/'); // Navigate to home page after successful registration
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const { name, email, phone, work, password, cpassword } = user; // Destructure user state

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="part">
              <div className="from">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" value={name} onChange={handleInput} placeholder='Enter your Name' />
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" value={email} onChange={handleInput} placeholder='Enter your Email' />
                  <label htmlFor="phone">Phone</label>
                  <input type="number" name="phone" value={phone} onChange={handleInput} placeholder='Enter your Phone Number' />
                  <label htmlFor="work">Work</label>
                  <input type="text" name="work" value={work} onChange={handleInput} placeholder='Enter Full your Name' />
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" value={password} onChange={handleInput} placeholder='Enter your Password' />
                  <label htmlFor="cpassword">Comform_Password</label>
                  <input type="password" name="cpassword" value={cpassword} onChange={handleInput} placeholder='Enter your Comfom-Password' />
                  <button type="submit" className='button'>Submit</button>
                </form>
              </div>
              <div className="text">
                <img src={logo2} alt="" />
                <h1>Security Alert</h1>
                <p>Dear Customer - Do not save your Internet Banking password on any web browser using the default save password option.
                   For security reasons, Eudford recommends entering the Internet Banking password manually every time</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    
  );
}

export default New;
