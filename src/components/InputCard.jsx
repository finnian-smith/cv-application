import PropTypes from "prop-types";
import "../styles/InputCard.css";

const InputCard = ({ title, fields, data, onChange }) => {
  return (
    <div className="input-card">
      <h2>{title}</h2>
      <form>
        {fields.map((field, index) => (
          <div key={index} className="form-group">
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={data[field.name] || ""}
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

InputCard.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputCard;
