import { useState } from "react";
import InputCard from "./InputCard";

function ExperienceInput() {
  const [experienceData, setExperienceData] = useState({
    companyName: "",
    title: "",
    location: "",
    startDate: "",
    endData: "",
    description: "",
  });

  const experienceFields = [
    { label: "Company Name", name: "companyName", type: "text" },
    { label: "Title", name: "title", type: "text" },
    { label: "Location", name: "location", type: "text" },
    { label: "Start Date", name: "startDate", type: "text" },
    { label: "End Date", name: "endDate", type: "text" },
    { label: "Description", name: "description", type: "text" },
  ];

  const handleExperienceChange = (name, value) => {
    setExperienceData({
      ...experienceData,
      [name]: value,
    });
  };

  return (
    <InputCard
      title="Experience"
      fields={experienceFields}
      data={experienceData}
      onChange={handleExperienceChange}
    />
  );
}

export default ExperienceInput;
