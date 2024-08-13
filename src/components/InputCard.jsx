import { useState } from "react";
import PropTypes from "prop-types";
import InputForm from "./InputForm";
import "../styles/InputCard.css";

const InputCard = ({
  title,
  fields,
  initialData,
  multiple,
  showDeleteButton,
}) => {
  const [entries, setEntries] = useState(multiple ? [] : [initialData]);
  const [currentEntry, setCurrentEntry] = useState(initialData);
  const [isEditing, setIsEditing] = useState(title == "Personal Details"); // set to false either depending on personal details approach
  const [editIndex, setEditIndex] = useState(null);

  const handleFormChange = (name, value) => {
    setCurrentEntry({
      ...currentEntry,
      [name]: value,
    });
  };

  const handleSave = () => {
    if (multiple) {
      if (editIndex !== null) {
        // update existing entry
        const updatedEntries = [...entries];
        updatedEntries[editIndex] = currentEntry;
        setEntries(updatedEntries);
        setEditIndex(null);
      } else {
        // add new entry
        setEntries([...entries, currentEntry]);
      }
    } else {
      // update single entry (personal details)
      setEntries([currentEntry]);
    }
    setCurrentEntry(initialData); // reset form after save
    setIsEditing(false);
  };

  const handleEdit = (index) => {
    setCurrentEntry(entries[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleAddNew = () => {
    setCurrentEntry(initialData); // reset to initial data for new entry
    setIsEditing(true);
    setEditIndex(null); // ensure new entry is being created
  };

  const handleDelete = () => {
    const updatedEntries = entries.filter((_, i) => i !== editIndex);
    setEntries(updatedEntries);
    setIsEditing(false); // exit edit mode after deletion
    setEditIndex(null);
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
  initialData: PropTypes.object.isRequired,
  multiple: PropTypes.bool,
  showDeleteButton: PropTypes.bool,
};

export default InputCard;
