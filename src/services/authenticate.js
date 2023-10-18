import axios from "axios";

class Authenticate {
  registerUser(formData) {
    return axios
      .post(`http://localhost:4002/register`, formData)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response;
      });
  }

  loginUser(formData) {
    return axios
      .post(`http://localhost:4002/login`, formData)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response;
      });
  }
}

export default new Authenticate();
