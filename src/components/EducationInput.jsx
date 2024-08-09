import { useState } from "react";
import InputCard from "./InputCard";

function EducationInput() {
  const [educationData, setEducationData] = useState({
    university: "",
    degree: "",
    startDate: "",
    endData: "",
  });

  const educationFields = [
    { label: "University", name: "university", type: "text" },
    { label: "Degree", name: "degree", type: "text" },
    { label: "Start Date", name: "startDate", type: "text" },
    { label: "End Date", name: "endDate", type: "text" },
  ];

  const handleEducationChange = (name, value) => {
    setEducationData({
      ...educationData,
      [name]: value,
    });
  };

  return (
    <InputCard
      title="Education"
      fields={educationFields}
      data={educationData}
      onChange={handleEducationChange}
    />
  );
}

export default EducationInput;
