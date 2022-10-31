import jwtDecode from "jwt-decode";

export const fetchUser = () => {
  let userInfo =
    localStorage.getItem("USER__MOMENT_") !== undefined
      ? JSON.parse(localStorage.getItem("USER__MOMENT_"))
      : localStorage.clear();
  try {
    userInfo = jwtDecode(`${userInfo}`);
  } catch {}
  return userInfo;
};
