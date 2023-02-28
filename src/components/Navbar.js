import logo from "../images/logo.svg";

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="logo" className="nav-logo"/>
    </nav>
  );
}

export default Navbar;
