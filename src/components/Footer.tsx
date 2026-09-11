import "./Footer.css";
import wLogo from "../assets/Logo.svg";
import lg1 from "../img/card6/card6-img1-linkedin.svg";
import lg2 from "../img/card6/card6-img2-facebook.svg";
import lg3 from "../img/card6/card6-img3-twitter-x.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="f-top-conteiner">
          <img
            src={wLogo}
            alt="white-logo-positivus"
            style={{
              height: "29px",
              filter: "brightness(0) invert(1)",
            }}
          />

          <nav aria-label="bottom-navigation">
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

          <div className="social-media">
            <button>
              <img src={lg1} alt="social-media-linkedin" />
            </button>
            <button>
              <img src={lg2} alt="social-media-facebook" />
            </button>
            <button>
              <img src={lg3} alt="social-media-twitter-x" />
            </button>
          </div>
        </div>
        <div className="f-middle-conteiner">
          <div className="f-middle-conteiner-text">
            <div className="f-middle-conteiner-div color-green">
              <h4>Contact us</h4>
            </div>
            <div className="f-middle-conteiner-left">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>
          <div className="f-middle-conteiner-email">
            <input type="email" placeholder="Email" />
            <button className="color-green">Subscribe to news</button>
          </div>
        </div>
        <div className="f-bottom-conteiner">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
