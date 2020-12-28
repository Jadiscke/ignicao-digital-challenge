import axios from "axios";

interface User {
  name: string;
  email: string;
  tags: Array<string>;
  id?: string;
}
const getUsers = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
  return response.data;
};

const getFilterUsers = async ({
  filter,
  value,
}: {
  filter: string;
  value: string;
}) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/users?${filter}=${value}`
  );

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

const updateUser = async ({ name, email, tags, id }: User) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/users/${id}`,
      { name, email, tags }
    );
    return response.data;
  } catch (error) {
    const response = error;
    return response;
  }
};

const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/users/${id}`
    );
    return response.data;
  } catch (error) {
    const response = error;
    return response;
  }
};

export { getUsers, createUser, updateUser, deleteUser, getFilterUsers };
