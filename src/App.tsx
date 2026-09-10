import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="Logo" />

        <div className="header-container">
          <nav>
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

      <body>
        <h1>asd</h1>
      </body>
    </>
  );
}

export default App;
