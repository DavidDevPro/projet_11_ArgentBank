import axios from "axios";

export const login = async (Credential) => {
  const reponse = await axios.post(
    "http://localhost:3001/api/v1/user/login",
    Credential
  );
  return reponse.data.body.token;
};

export const userProfile = async (token) => {
  const reponse = await axios.post(
    "http://localhost:3001/api/v1/user/profile",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return reponse.data.body;
};
