import React, { useState } from "react";
import BuildForm from "./BuildForm";
import formbuilder from "../../services/formbuilder";

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);
  const [formJson, setFormJson] = useState([]);
  const [formName, setFormName] = useState("");

  const handleDrop = (event) => {
    event.preventDefault();
    const fieldType = event.dataTransfer.getData("fieldType");
    setFormFields([
      ...formFields,
      { type: fieldType, label: "", placeholder: "", value: "" },
    ]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFieldDragStart = (event, fieldType) => {
    event.dataTransfer.setData("fieldType", fieldType);
  };

  const handleFieldRemove = (index) => {
    const updatedFields = [...formFields];
    updatedFields.splice(index, 1);
    setFormFields(updatedFields);
  };

  const handleLabelChange = (event, index) => {
    const updatedFields = [...formFields];
    updatedFields[index].label = event.target.value;
    setFormFields(updatedFields);
  };

  const handlePlaceholderChange = (event, index) => {
    const updatedFields = [...formFields];
    updatedFields[index].placeholder = event.target.value;
    setFormFields(updatedFields);
  };

  const handleFormName = (event) => {
    setFormName(event.target.value);
  };

  const handleSaveForm = () => {
    // Send formFields to backend for saving to database
    const formData = {
      formName: formName,
      fields: formFields,
    };

    formbuilder
      .createForm(formData)
      .then((res) => {
        console.log("formcreated", res);
      })
      .catch((err) => {
        console.log(err);
      });

    setFormJson(formData);
  };

  return (
    <div>
      <div>
        <button
          draggable
          onDragStart={(event) => handleFieldDragStart(event, "text")}
        >
          Add Text Field
        </button>
        <button
          draggable
          onDragStart={(event) => handleFieldDragStart(event, "email")}
        >
          Add Email Field
        </button>
      </div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{ border: "2px dashed #000", padding: "20px", margin: "20px 0" }}
      >
        {formFields.map((field, index) => (
          <div
            key={index}
            draggable
            onDragStart={(event) => handleFieldDragStart(event, field.type)}
          >
            <input
              type="text"
              value={field.label}
              onChange={(event) => handleLabelChange(event, index)}
              placeholder="Enter Label..."
            />
            <input
              type="text"
              value={field.placeholder}
              onChange={(event) => handlePlaceholderChange(event, index)}
              placeholder="Enter Placeholder..."
            />
            <button onClick={() => handleFieldRemove(index)}>Remove</button>
          </div>
        ))}
      </div>

      <div>
        <label>
          <b>Enter Form Name</b>
        </label>
        <br />
        <input type="text" onChange={(event) => handleFormName(event)} />
      </div>
      <br />
      <div>
        <button onClick={handleSaveForm}>Save Form</button>
      </div>
      <hr style={{ color: "5px solid black" }} />
      <BuildForm formFields={formJson} />
    </div>
  );
};

export default FormBuilder;
