import axios from "axios";

interface User {
  name: string;
  email: string;
  tags: Array<string>;
}
const getUsers = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
  return response.data;
};

const createUser = async ({ name, email, tags }: User) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/users`,
      { name, email, tags }
    );
    return response.data;
  } catch (error) {
    const response = error;
    return response;
  }
};

export { getUsers, createUser };
