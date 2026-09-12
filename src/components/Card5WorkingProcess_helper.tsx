import img_minus from "../img/card-workproc-minus.svg";
import img_plus from "../img/card-workproc-plus.svg";

interface Card5WorkingProcessProps {
  pos: string;
  topic: string;
  moreinf: string;

  isOpen: boolean;
  onToggle: () => void;
}

function Card5WorkingProcess_helper({
  pos,
  topic,
  moreinf,
  isOpen,
  onToggle,
}: Card5WorkingProcessProps) {
  return (
    // card
    <div
      className={isOpen ? "color-green" : "color-white"}
      style={{
        display: "flex",
        border: "1px black solid",
        flexFlow: "column",
        padding: " 41px 60px",
        borderRadius: "45px",
        gap: "30px",
        boxShadow: "0px 5px 0px #191A23",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          fontFamily: "inherit",
          background: "none",
        }}
      >
        <div>
          {/* text + button */}
          <div
            style={{
              display: "flex",
              flexFlow: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                gap: "25px",
              }}
            >
              <h1>{pos}</h1>
              <h3>{topic}</h3>
            </div>
            <div style={{ display: "flex" }}>
              <span style={{ borderRadius: "100%", background: "none" }}>
                <img src={isOpen ? img_minus : img_plus} alt="more-info" />
              </span>
            </div>
          </div>
        </div>
      </button>

      <hr style={isOpen ? { display: "flex" } : { display: "none" }} />

      {/* more info */}
      <div
        style={
          isOpen
            ? { display: "flex", flexFlow: "column", gap: "20px" }
            : { display: "none" }
        }
      >
        <p>{moreinf}</p>
      </div>
    </div>
  );
}

export default Card5WorkingProcess_helper;
