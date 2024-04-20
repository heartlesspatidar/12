import React, { useState, useEffect } from 'react';
import a1 from './images/digital-acount.png';
import a2 from './images/home-loan.png';
import a3 from './images/internet-banking.png';
import a4 from './images/locker-online.png';
import a5 from './images/Mobile-Banking.png';
import a6 from './images/savings-account.png';
import a7 from './images/bank.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of image URLs
  const slides = [
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7
  ];

  // Function to switch to the next slide
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div>
      <div className="slider-container">
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="card">
          <div className="box">
            <div class="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Services</th>
                    <th>Names</th>
                    <th>Feauters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img src={a1} alt="" /></td>
                    <td><h4>Digital Accounts </h4></td>
                    <td> <p>Our official mobile banking application with new and exciting features and easy user interface.</p></td>
                  </tr>
                  <tr>
                    <td><img src={a2} alt="" /></td>
                    <td><h4> Home Loans</h4></td>
                    <td> <p>Our official mobile banking application with new and exciting features and easy user interface.</p></td>
                  </tr>
                  <tr>
                    <td><img src={a3} alt="" /></td>
                    <td><h4>Internet Banking</h4></td>
                    <td> <p>Our official mobile banking application with new and exciting features and easy user interface.</p></td>
                  </tr>
                  <tr>
                    <td><img src={a4} alt="" /></td>
                    <td><h4>Apply Locker Online</h4></td>
                    <td> <p>Our official mobile banking application with new and exciting features and easy user interface.</p></td>
                  </tr>
                  <tr>
                    <td><img src={a5} alt="" /></td>
                    <td><h4>Mobile Banking</h4></td>
                    <td> <p>Our official mobile banking application with new and exciting features and easy user interface.</p></td>
                  </tr>
                  <tr>
                    <td><img src={a6} alt="" /></td>
                    <td><h4>Saving Account</h4></td>
                    <td> <p>Our official mobile banking application with new and exciting features and easy user interface.</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card">
          <div className="box">
            <div className="set">
              <ul>
                <li><img src={a7} alt="" /></li>
                <h2>Experience a new Digital World. Welcome to My World</h2>
                <p>Our official mobile banking application with new and exciting features and easy user interface.</p>
                <p>Gain access to many exciting offers & trending deals on various bob World Debit & Credit Cards.</p>
                <p>Choose from our wide range of deposit products that are specifically designed to keep your unique requirements in mind.</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Home;
