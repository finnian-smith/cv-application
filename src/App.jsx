import "./App.css";
import { useState } from "react";
import InputContainer from "./components/InputContainer";
import OutputContainer from "./components/OutputContainer";

function App() {
  const [formData, setFormData] = useState({
    personalDetails: {},
    experience: [],
    education: [],
  });

  // update the state
  const handleFormChange = (section, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
  };

  return (
    <>
      <InputContainer formData={formData} onFormChange={handleFormChange} />
      <OutputContainer formData={formData} />
    </>
  );
}

export default App;
