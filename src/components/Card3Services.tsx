import pic1 from "../img/card2/card2-img1-web-search.svg";
import pic2 from "../img/card2/card2-img2-selecting-a-value-in-the-browser-window.svg";
import pic3 from "../img/card2/card2-img3-browser-window-with-emoticon-likes-and-stars-around.svg";
import pic4 from "../img/card2/card2-img4-sending-messages-from-one-place-to-another.svg";
import pic5 from "../img/card2/card2-img5-many-browser-windows-with-different-information 1.svg";
import pic6 from "../img/card2/card2-img6-volumetric-analytics-of-different-types-in-web-browsers.svg";
import illu from "../img/card3-Illustration-smile-stars.svg";
import Card3Services_helper from "./Card3Services_helper";

function Card3Services() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "40px",
        }}
      >
        <Card3Services_helper
          pic_name={pic1}
          pic_alt="web-search"
          color_bg="color-white"
          topic_bg="color-green"
          topic_txt_top="Search engine"
          topic_txt_bottom="optimization"
        />
        <Card3Services_helper
          pic_name={pic2}
          pic_alt="selecting-a-value-in-the-browser-window"
          color_bg="color-green"
          topic_bg="color-white"
          topic_txt_top="Pay-per-click"
          topic_txt_bottom="advertising"
        />
        <Card3Services_helper
          pic_name={pic3}
          pic_alt="browser-window-with-emoticon-likes-and-stars-around"
          color_bg="color-black"
          topic_bg="color-white"
          topic_txt_top="Social Media"
          topic_txt_bottom="Marketing"
        />
        <Card3Services_helper
          pic_name={pic4}
          pic_alt="sending-messages-from-one-place-to-another"
          color_bg="color-white"
          topic_bg="color-green"
          topic_txt_top="Email"
          topic_txt_bottom="Marketing"
        />
        <Card3Services_helper
          pic_name={pic5}
          pic_alt="many-browser-windows-with-different-information"
          color_bg="color-green"
          topic_bg="color-white"
          topic_txt_top="Content"
          topic_txt_bottom="Creation"
        />
        <Card3Services_helper
          pic_name={pic6}
          pic_alt="volumetric-analytics-of-different-types-in-web-browsers"
          color_bg="color-black"
          topic_bg="color-green"
          topic_txt_top="Analytics and "
          topic_txt_bottom="Tracking"
        />
      </div>

      {/* Card */}
      <div
        className="color-white"
        style={{
          marginTop: "100px",
          display: "flex",
          flexFlow: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px",
          borderRadius: "45px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "26px",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            position: "relative",
            zIndex: "1",
          }}
        >
          <h3>Let’s make things happen</h3>
          <p>
            Contact us today to learn more about how our digital <br />
            marketing services can help your business grow and <br />
            succeed online.
          </p>
          <button
            className="color-black"
            style={{ borderRadius: "14px", padding: "20px 35px" }}
          >
            <h4>Get your free proposal</h4>
          </button>
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 2,
            right: "10%",
          }}
        >
          <img src={illu} alt="Illustration-smile-stars" />
        </div>
      </div>
    </div>
  );
}

export default Card3Services;
