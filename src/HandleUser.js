import axios from "axios";

// return the user data from the session storage
export const getUser = () => {
  const email = sessionStorage.getItem("email");
  if (email) {
    return JSON.parse(email);
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
  sessionStorage.removeItem("email");
};

// set the token and user from the session storage
export const setUserSession = (token, refreshToken, email) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("refreshToken", refreshToken);
  sessionStorage.setItem("email", JSON.stringify(email));
};
