import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import formbuilder from "../../services/formbuilder";
import candidate from "../../services/candidate";

const ApplicationView = () => {
  const { id } = useParams();

  const [formFields, setFormFields] = useState({});

  useEffect(() => {
    formbuilder
      .formview(id)
      .then((res) => {
        const updatedFormFields = res.fields.map((field) => ({
          ...field,
          value: field.value || "",
        }));
        setFormFields({ ...res, fields: updatedFormFields });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleChange = (index, e) => {
    const { value } = e.target;
    setFormFields((prevFormFields) => {
      const updatedFields = [...prevFormFields.fields];
      updatedFields[index].value = value;
      return { ...prevFormFields, fields: updatedFields };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log("form builder", formFields);
    candidate
      .addCandidate(formFields)
      .then((res) => {
        console.log("candidate reg", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>{formFields?.formName}</h1>
      {formFields?.fields?.map((field, index) => {
        return (
          <div key={index} className="mt-3 pl-3">
            <b>{field.label}</b>
            <br />
            <input
              type={field.type}
              placeholder={field.placeholder}
              value={field.value}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
        );
      })}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ApplicationView;
