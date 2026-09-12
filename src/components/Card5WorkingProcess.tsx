import { useState } from "react";
import Card5WorkingProcess_helper from "./Card5WorkingProcess_helper";

function Card5WorkingProcess() {
  const [activePos, setActivePos] = useState<string | null>("01");

  function handleToggle(clickedPos: string) {
    if (activePos === clickedPos) {
      setActivePos(null);
    } else {
      setActivePos(clickedPos);
    }
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <Card5WorkingProcess_helper
        pos="01"
        topic="Consultation"
        moreinf="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        isOpen={activePos === "01"}
        onToggle={() => handleToggle("01")}
      />
      <Card5WorkingProcess_helper
        pos="02"
        topic="Research and Strategy Development"
        moreinf="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        isOpen={activePos === "02"}
        onToggle={() => handleToggle("02")}
      />

      <Card5WorkingProcess_helper
        pos="03"
        topic="Implementation"
        moreinf="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        isOpen={activePos === "03"}
        onToggle={() => handleToggle("03")}
      />
      <Card5WorkingProcess_helper
        pos="04"
        topic="Monitoring and Optimization"
        moreinf="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        isOpen={activePos === "04"}
        onToggle={() => handleToggle("04")}
      />
      <Card5WorkingProcess_helper
        pos="05"
        topic="Reporting and Communication"
        moreinf="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        isOpen={activePos === "05"}
        onToggle={() => handleToggle("05")}
      />
      <Card5WorkingProcess_helper
        pos="06"
        topic="Continual Improvement"
        moreinf="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        isOpen={activePos === "06"}
        onToggle={() => handleToggle("06")}
      />
    </div>
  );
}

export default Card5WorkingProcess;
