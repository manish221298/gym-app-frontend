import axios from "axios";

class Trainee {
  getTraineeList() {
    return axios
      .get(`http://localhost:4002/traineelist`)
      .then((res) => {
        console.log("service page", res.data);
        return res.data;
      })
      .catch((err) => {
        return err.response;
      });
  }

  getTraineeHistory(id) {
    return axios
      .get(`http://localhost:4002/trainee/history/${id}`)
      .then((res) => {
        console.log("service trainee history page", res.data);
        return res.data;
      })
      .catch((err) => {
        return err.response;
      });
  }

  renewPackage(id, formData) {
    return axios
      .put(`http://localhost:4002/traineedetails/${id}`, formData)
      .then((res) => {
        console.log("service page renew package ", res.data);
        return res.data;
      })
      .catch((err) => {
        return err.response;
      });
  }
}

export default new Trainee();