import React, { useState, useEffect } from "react";
import formbuilder from "../../services/formbuilder";
import { Button, Table } from "antd";
import { Link } from "react-router-dom";

const FormList = ({}) => {
  const [formList, setFormList] = useState([]);

  useEffect(() => {
    formbuilder
      .getFormList()
      .then((res) => {
        console.log("res form builder", res);
        setFormList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    {
      title: "FormId",
      dataIndex: "_id",
      key: "_id",
      render: (_id) => (
        <Link style={{ textDecoration: "none" }} to={`/form/${_id}`}>
          {_id}
        </Link>
      ),
    },
    {
      title: "Form Name",
      dataIndex: "formName",
      key: "formName",
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      render: (_id) => (
        <span>
          <Button className="edit-button" type="primary">
            Edit
          </Button>
          ,
          <Button className="edit-button" type="primary">
            Delete
          </Button>
        </span>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={formList} columns={columns} />
    </div>
  );
};

export default FormList;
