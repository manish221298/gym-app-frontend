import axios from "axios";

const url = "http://localhost:4002";

class Authenticate {
  registerUser(formData) {
    return axios
      .post(`${url}/register`, formData)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response;
      });
  }

  loginUser(formData) {
    return axios
      .post(`${url}/login`, formData)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response;
      });
  }

  getUserRole(userId) {
    return axios
      .get(`${url}/getrole/${userId}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response;
      });
  }
}

export default new Authenticate();
