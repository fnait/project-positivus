import logo1 from "../img/logos/logo-1-сompany-dribbble.svg";
import logo2 from "../img/logos/logo-2-сompany-hubspot.svg";
import logo3 from "../img/logos/logo-3-сompany-notion.svg";
import logo4 from "../img/logos/logo-4-сompany-netflix.svg";
import logo5 from "../img/logos/logo-5-сompany-zoom.svg";
import logo6 from "../img/logos/logo-6-сompany-amazon.svg";

function Card2Logos() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        filter: "brightness(0)",
        height: "48px",
      }}
    >
      <img src={logo6} alt="сompany-amazon" />
      <img src={logo1} alt="сompany-dribbble" />
      <img src={logo2} alt="сompany-hubspot" />
      <img src={logo3} alt="сompany-notion" />
      <img src={logo4} alt="сompany-netflix" />
      <img src={logo5} alt="сompany-zoom" />
    </div>
  );
}

export default Card2Logos;
