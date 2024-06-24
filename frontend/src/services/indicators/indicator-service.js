import handleError from "../errors/handle-errors";
import axios from "../axios";

async function createIndicator(data) {
  return await axios
    .post(`/indicators`, data)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      handleError(error);
      return error;
    });
};

export {
  createIndicator
};