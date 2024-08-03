import axios from "axios";
const AxiosIntance = () => {
  const axiosCon = axios.create({
    baseURL: "http://localhost:4325",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return axiosCon
};

export default AxiosIntance
