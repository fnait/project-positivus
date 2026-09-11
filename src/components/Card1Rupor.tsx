import imgrupor from "../img/card1-Illustration-rupor.svg";
import "./Card1Rupor.css";

function Card1Rupor() {
  return (
    <div className="c1-body">
      <div className="c1-text">
        <h1>
          Navigating the <br />
          digital landscape <br />
          for success <br />
        </h1>
        <h4>
          Our digital marketing agency helps businesses <br />
          grow and succeed online through a range of <br />
          services including SEO, PPC, social media marketing, <br />
          and content creation. <br />
        </h4>

        <button className="color-black">
          <h4>Book a consultation</h4>
        </button>
      </div>
      <div className="c1-img">
        <img src={imgrupor} alt="card1-Illustration-rupor" />
      </div>
    </div>
  );
}

export default Card1Rupor;
