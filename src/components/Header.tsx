import "./Header.css";
import logo from "../assets/Logo.svg";

function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="Logo" />

        <div className="header-container">
          <nav aria-label="main-navigation">
            <ul>
              <li>
                <a href="#aboutus">About us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#usecases">Use Cases</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </nav>
          <button>Request a quote </button>
        </div>
      </header>
    </>
  );
}

export default Header;
