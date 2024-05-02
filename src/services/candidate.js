import axios from "axios";
const url = "http://localhost:4002";

class Candidate {
  addCandidate(formData) {
    return axios
      .post(`${url}/addcandidates`, formData)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response;
      });
  }

  candidateListOfSingleForm(formId) {
    return axios
      .get(`${url}/getcandidatebyform/${formId}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response;
      });
  }
}

export default new Candidate();
