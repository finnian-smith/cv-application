import InputCard from "./InputCard";
import PropTypes from "prop-types";
import "../styles/InputContainer.css";

function InputContainer({ formData, onFormChange }) {
  const headerFields = [
    { label: "Full Name", name: "fullName", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Phone Number", name: "phoneNumber", type: "tel" },
    { label: "Address", name: "address", type: "text" },
  ];

  const experienceFields = [
    { label: "Company", name: "company", type: "text" },
    { label: "Title", name: "title", type: "text" },
    { label: "Location", name: "location", type: "text" },
    { label: "Start Date", name: "startDate", type: "text" },
    { label: "End Date", name: "endDate", type: "text" },
    { label: "Description", name: "description", type: "text" },
  ];

  const educationFields = [
    { label: "University", name: "university", type: "text" },
    { label: "Degree", name: "degree", type: "text" },
    { label: "Start Date", name: "startDate", type: "text" },
    { label: "End Date", name: "endDate", type: "text" },
  ];

  return (
    <div className="input-container">
      <InputCard
        title="Personal Details"
        fields={headerFields}
        data={formData.personalDetails}
        onFormChange={(data) => onFormChange("personalDetails", data)}
        multiple={false}
        showDeleteButton={false}
      />
      <InputCard
        title="Experience"
        fields={experienceFields}
        data={formData.experience}
        onFormChange={(data) => onFormChange("experience", data)}
        multiple={true}
        showDeleteButton={true}
      />
      <InputCard
        title="Education"
        fields={educationFields}
        data={formData.education}
        onFormChange={(data) => onFormChange("education", data)}
        multiple={true}
        showDeleteButton={true}
      />
    </div>
  );
}

InputContainer.propTypes = {
  formData: PropTypes.shape({
    personalDetails: PropTypes.object.isRequired,
    experience: PropTypes.arrayOf(PropTypes.object).isRequired,
    education: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  onFormChange: PropTypes.func.isRequired,
};

export default InputContainer;
