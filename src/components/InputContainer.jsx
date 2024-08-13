import "../styles/InputContainer.css";
import InputCard from "./InputCard";

function InputContainer() {
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
        initialData={{}}
        multiple={false}
        showDeleteButton={false}
      />
      <InputCard
        title="Experience"
        fields={experienceFields}
        initialData={{}}
        multiple={true}
        showDeleteButton={true}
      />
      <InputCard
        title="Education"
        fields={educationFields}
        initialData={{}}
        multiple={true}
        showDeleteButton={true}
      />
    </div>
  );
}

export default InputContainer;
