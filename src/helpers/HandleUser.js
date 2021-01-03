import axios from "axios";

// return the user data from the session storage
export const getUser = () => {
  const user = sessionStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  } else {
    return null;
  }
};

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

// return new token
export const refreshToken = () => {
  axios
      .post("https://h3-blog.herokuapp.com/user/refreshToken", {
        refreshToken: sessionStorage.getItem("refreshToken"),
      })
      .then((response) => {
        sessionStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        console.log(error.response);
      });
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("refreshToken");
  sessionStorage.removeItem("user");
};

// set the token and user from the session storage
export const setUserSession = (token, refreshToken, user) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("refreshToken", refreshToken);
  sessionStorage.setItem("user", JSON.stringify(user));
};
