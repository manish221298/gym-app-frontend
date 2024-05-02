const BuildForm = ({ formFields }) => {
  console.log("form field build", formFields);
  return (
    <div>
      <h1>{formFields?.formName}</h1>
      {formFields?.fields?.map((field, index) => {
        return (
          <div key={index} className="mt-3 pl-3">
            <b>{field.label} </b>
            <br />
            <input type={field.type} placeholder={field.placeholder} />
          </div>
        );
      })}
    </div>
  );
};

export default BuildForm;
