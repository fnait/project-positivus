interface CardTopicProps {
  text1: string;
  text2: React.ReactNode;
  padd_bot: number;
  padd_top: number;
}

function CardTopic({ text1, text2, padd_bot, padd_top }: CardTopicProps) {
  return (
    <div
      style={{
        display: "flex",
        padding: `${padd_top}px 0  ${padd_bot}px 0`,
        gap: "40px",
      }}
    >
      <h2
        className="color-green"
        style={{ padding: "0 7px", borderRadius: "7px" }}
      >
        {text1}
      </h2>
      <p>{text2}</p>
    </div>
  );
}

export default CardTopic;
