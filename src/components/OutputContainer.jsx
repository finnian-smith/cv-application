import PropTypes from "prop-types";
import OutputCard from "./OutputCard";
import "../styles/OutputContainer.css";

function OutputContainer({ formData }) {
  return (
    <div className="output-container">
      <OutputCard title="Personal Details" data={formData.personalDetails} />
      <OutputCard title="Experience" data={formData.experience} />
      <OutputCard title="Education" data={formData.education} />
    </div>
  );
}

OutputContainer.propTypes = {
  formData: PropTypes.shape({
    personalDetails: PropTypes.object,
    experience: PropTypes.arrayOf(PropTypes.object),
    education: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default OutputContainer;
