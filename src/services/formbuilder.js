import axios from "axios";
const url = "http://localhost:4002";

class FormBuilder {
  createForm(formData) {
    return axios
      .post(`${url}/formcreate`, formData)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response;
      });
  }

  getFormList() {
    return axios
      .get(`${url}/formslist`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response;
      });
  }

  formview(id) {
    return axios
      .get(`${url}/formslist/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response;
      });
  }
}

export default new FormBuilder();
