import axios from "axios";

const getUsers = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getUsers };
