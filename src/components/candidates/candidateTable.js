import React, { useState, useEffect } from "react";
import candidate from "../../services/candidate";
import formbuilder from "../../services/formbuilder";
import DynamicTable from "../common/DynamicTable";

const CandidateTable = () => {
  const [formList, setFormList] = useState([]);
  const [formId, setFormId] = useState("6628fc1488aaf6805d4f0916"); //testing form
  const [formData, setFormData] = useState();

  useEffect(() => {
    formbuilder
      .getFormList()
      .then((res) => {
        setFormList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    candidate
      .candidateListOfSingleForm(formId)
      .then((res) => {
        setFormData(res);
        console.log("sing can list", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [formId]);

  const handleFormChange = (e) => {
    const selectedFormId = e.target.value;
    setFormId(selectedFormId);
  };

  const data = [
    { id: 1, name: "John", age: 30, address: "hrg", city: "patna" },
    { id: 2, name: "Jane", age: 25, int: 78, country: "india" },
    { id: 3, name: "Doe", age: 40, email: "gf", state: "bihar" },
  ];

  return (
    <div>
      <div>
        <h1>Candidate table</h1>
        <div>
          <select onChange={handleFormChange} value={formId}>
            {formList.map((form) => {
              return (
                <option key={form._id} value={form?._id}>
                  {form?.formName}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <DynamicTable data={formData} />
        </div>
      </div>
    </div>
  );
};

export default CandidateTable;
