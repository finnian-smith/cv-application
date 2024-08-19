import PropTypes from "prop-types";
import "../styles/InputForm.css";

const InputForm = ({ fields, data, onChange }) => {
  return (
    <form className="input-form">
      {fields.map((field, index) => (
        <div key={index} className="form-group">
          <label className="form-label">{field.label}</label>
          {field.name === "description" ? (
            <textarea
              className="form-input"
              id={field.name}
              name={field.name}
              value={data[field.name] || ""}
              onChange={(e) => onChange(e.target.name, e.target.value)}
              rows="5"
            />
          ) : (
            <input
              className="form-input"
              type={field.type}
              id={field.name}
              name={field.name}
              value={data[field.name] || ""}
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
          )}
        </div>
      ))}
    </form>
  );
};

InputForm.propTypes = {
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

export default InputForm;
