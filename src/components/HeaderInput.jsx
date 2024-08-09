import { useState } from "react";
import InputCard from "./InputCard";

function HeaderInput() {
  const [headerData, setHeaderData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const headerFields = [
    { label: "Full Name", name: "fullName", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Phone Number", name: "phoneNumber", type: "tel" },
    { label: "Address", name: "address", type: "text" },
  ];

  const handleHeaderChange = (name, value) => {
    setHeaderData({
      ...headerData,
      [name]: value,
    });
  };

  return (
    <InputCard
      title="Personal Details"
      fields={headerFields}
      data={headerData}
      onChange={handleHeaderChange}
    />
  );
}

export default HeaderInput;
