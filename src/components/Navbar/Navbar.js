import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

    this.setState({ isOpen: !this.state.isOpen });
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";

    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return <div>
      <div id="mySidenav" className="sidenav">
        <button type="button" className="closebtn color" onClick={() => this.closeNav()}>&times;
        </button>
        <Link to="/">Dashboard</Link>
        <Link to="/meus-investimentos">Meus investimentos</Link>
        <Link to="/investir">Investir</Link>
        <Link to="/indicacao">Indicaçao</Link>
        <Link to="/">Perfil</Link>
      </div>

      <div id="main">
        {!this.state.isOpen &&
          <span style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={() => this.openNav()}>&#9776;</span>
        }
      </div>
    </div>
  }
}