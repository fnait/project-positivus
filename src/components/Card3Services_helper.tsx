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
