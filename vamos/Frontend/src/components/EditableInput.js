import React from "react";

const EditableInput = ({ label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={`edited-${label.toLowerCase()}`}>{label}</label>
      <input
        type="text"
        className="form-control"
        id={`edited-${label.toLowerCase()}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default EditableInput;
