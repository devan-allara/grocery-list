import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
        <div id='banner' className="shadow">
            <h1 id="bannerText">My Grocery List</h1>
            <h1 id ="menuItem">New List</h1>
            <h1 id="menuItem">Grocery History</h1>
            <h1 id="menuItem">Login</h1>
        </div>
    )}
}
export default Header 