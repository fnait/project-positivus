import img_arrow_w from "../img/card2/card2-arrow.svg";
import img_arrow_b from "../img/card2/card2-arrow2.svg";

interface Card3ServiceshelperProps {
  pic_name: string;
  pic_alt: string;
  color_bg: string;
  topic_bg: string;
  topic_txt_top: string;
  topic_txt_bottom: string;
}

function Card3Services_helper({
  pic_name,
  pic_alt,
  color_bg,
  topic_bg,
  topic_txt_top,
  topic_txt_bottom,
}: Card3ServiceshelperProps) {
  let TempArrow = img_arrow_w;
  // let txtcolor = "color-white";

  if (color_bg == "color-black") {
    TempArrow = img_arrow_b;
    // txtcolor = "color-white";
  }

  return (
    <div
      className={color_bg}
      style={{
        display: "flex",
        justifyContent: "space-between",

        padding: "50px",
        height: "310px",
        width: "600px",
        borderRadius: "45px",
        border: "1px #191A23 solid",
        boxShadow: "0 5px #191A23",
      }}
    >
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3
            className={topic_bg}
            style={{
              display: "inline-block",
              borderRadius: "7px",
              padding: "0 7px",
            }}
          >
            {topic_txt_top}
          </h3>
          <br />
          <h3
            className={topic_bg}
            style={{
              display: "inline-block",
              borderRadius: "7px",
              padding: "0 7px",
            }}
          >
            {topic_txt_bottom}
          </h3>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <button
            style={{
              // width: "41px",
              // height: "41px",
              borderRadius: "100%",
              background: "none",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "15px",
              color: "inherit",
              fontFamily: "inherit",
            }}
          >
            <img src={TempArrow} alt="" />
            <h4 style={{ fontWeight: "400" }}>Learn more</h4>
          </button>
        </div>
      </div>
      <div>
        <img
          src={pic_name}
          alt={pic_alt}
          style={{ height: "190px", width: "auto" }}
        />
      </div>
    </div>
  );
}

export default Card3Services_helper;
