import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password , password2) => {
  console.log(username)
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    password2
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const exportedObjets = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default exportedObjets;