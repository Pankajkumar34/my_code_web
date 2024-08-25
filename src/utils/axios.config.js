import axios from "axios";
const AxiosIntance = () => {
  // https://mycodebackend.onrender.com
  const axiosCon = axios.create({
    baseURL: "https://mycodebackend.onrender.com",
    headers: {
      // "Content-Type": "application/json",
    },
  });
  return axiosCon
};

export default AxiosIntance
