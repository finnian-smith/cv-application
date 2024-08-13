import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InputForm from "./InputForm";
import "../styles/InputCard.css";

const InputCard = ({
  title,
  fields,
  data,
  onFormChange,
  multiple,
  showDeleteButton,
}) => {
  const [entries, setEntries] = useState(multiple ? data : [data]);
  const [currentEntry, setCurrentEntry] = useState(data);
  const [isEditing, setIsEditing] = useState(title == "Personal Details");
  const [editIndex, setEditIndex] = useState(null);

  // effect to sync local entries state with prop data
  useEffect(() => {
    setEntries(multiple ? data : [data]);
    if (!multiple) {
      setCurrentEntry(data);
    }
  }, [data, multiple]);

  const handleFormChange = (name, value) => {
    setCurrentEntry({
      ...currentEntry,
      [name]: value,
    });
  };

  const handleSave = () => {
    if (multiple) {
      const updatedEntries = [...entries];
      if (editIndex !== null) {
        updatedEntries[editIndex] = currentEntry;
      } else {
        updatedEntries.push(currentEntry);
      }
      setEntries(updatedEntries);
      onFormChange(updatedEntries);
    } else {
      setEntries([currentEntry]);
      onFormChange(currentEntry);
    }
    setCurrentEntry(multiple ? {} : data);
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setCurrentEntry(entries[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleAddNew = () => {
    setCurrentEntry({});
    setIsEditing(true);
    setEditIndex(null);
  };

  const handleDelete = () => {
    if (editIndex !== null) {
      const updatedEntries = entries.filter((_, i) => i !== editIndex);
      setEntries(updatedEntries);
      onFormChange(updatedEntries);
      setIsEditing(false);
      setEditIndex(null);
    }
  };

  return (
    <div className="section-card">
      <h2 className="section-title">{title}</h2>

      {isEditing ? (
        <>
          <InputForm
            fields={fields}
            data={currentEntry}
            onChange={handleFormChange}
          />
          <div className="button-group">
            <button onClick={handleSave} className="save-button">
              Save
            </button>
            {showDeleteButton && editIndex !== null && (
              <button onClick={handleDelete} className="delete-button">
                Delete
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          {entries.map((entry, index) => (
            <div key={index} className="saved-content">
              <div className="saved-data">
                {fields.map((field) => (
                  <p key={field.name}>
                    <strong>{field.label}:</strong> {entry[field.name]}
                  </p>
                ))}
              </div>
              <button onClick={() => handleEdit(index)} className="edit-button">
                Edit
              </button>
            </div>
          ))}
          {multiple && (
            <button onClick={handleAddNew} className="add-button">
              + {title}
            </button>
          )}
        </>
      )}
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
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
  onFormChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool.isRequired,
  showDeleteButton: PropTypes.bool.isRequired,
};

export default InputCard;
