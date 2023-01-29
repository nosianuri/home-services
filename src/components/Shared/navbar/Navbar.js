import React, { Component } from 'react';
import './Navbar.css';
import logo from '../../../assets/raywhitelogo.png';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <div>
        <div className='fixed z-50  w-full'>
          <nav className='py-2 lg:px-20 px-10'>
            <a className='py-3' href="/">
              <img className='w-[100px] lg:w-[130px]' src={logo} alt="Logo" />
            </a>

            <div>
              <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                <li className='uppercase ml-2'>
                  <a className='' href="/">Home</a></li>
                <li className='uppercase ml-2'><a href="/about">About Us</a></li>
                <li className='uppercase ml-2'><a href="/contact">Contact Us</a></li>
                <li className='uppercase ml-2'><a href="/service">Our Service</a></li>
                <li className='uppercase ml-2'><a href="/privacy-policy">Privacy Policy</a></li>
                <a className='text-4xl text-[#fcb900] font-semibold' href='/#'>011-111-1111</a>
              </ul>
            </div>

            <div id='mobile' onClick={this.handleClick}>
              <i id='bar' className={this.state.clicked ? "fa-solid fa-times" : "fas fa-bars"}></i>
            </div>
          </nav>
        </div>
      </div>
    )
  }

}

export default Navbar;