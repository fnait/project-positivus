import { useState } from "react";
import bgpic from "../img/card5-Illustration-stars-decor.svg";
import activeRadio from "../img/card8-radiobutton-active.svg";
import emptyRadio from "../img/card8-radiobutton.svg";
import "./Card8ContactUs.css";

function Card8ContactUs() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="contact-us color-white">
      <div className="contact-content">
        <div className="contact-options">
          <button
            type="button"
            className="contact-option"
            aria-pressed={isActive}
            onClick={() => setIsActive(true)}
          >
            <img src={isActive ? activeRadio : emptyRadio} alt="" />
            <span>Say Hi</span>
          </button>

          <button
            type="button"
            className="contact-option"
            aria-pressed={!isActive}
            onClick={() => setIsActive(false)}
          >
            <img src={isActive ? emptyRadio : activeRadio} alt="" />
            <span>Get a Quote</span>
          </button>
        </div>

        <div
          className="contact-fields"
          style={{ display: isActive ? "flex" : "none" }}
        >
          <label className="contact-field">
            Name
            <input type="text" name="name" placeholder="Name" />
          </label>

          <label className="contact-field">
            Email*
            <input type="email" name="email" placeholder="Email" required />
          </label>

          <label className="contact-field">
            Message*
            <textarea name="message" placeholder="Message" required />
          </label>
        </div>

        {!isActive && <div>text 2</div>}

        <button type="button" className="contact-submit color-black">
          Send Message
        </button>
      </div>

      <div className="contact-decoration">
        <img src={bgpic} alt="" />
      </div>
    </div>
  );
}

export default Card8ContactUs;
