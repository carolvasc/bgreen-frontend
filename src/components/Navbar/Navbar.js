import React from 'react';
import './Navbar.css';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  render() {
    return <div>
      <div id="mySidenav" className="sidenav">
        <a href="#" className="closebtn" onClick={() => this.closeNav()}>&times;</a>
        <a href="#">Meus investimentos</a>
        <a href="#">Investir</a>
        <a href="#">Perfil</a>
      </div>

      <div id="main">
        <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => this.openNav()}>&#9776;</span>
      </div>
    </div>
  }
}