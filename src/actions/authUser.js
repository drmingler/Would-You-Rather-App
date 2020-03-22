export const SET_AUTH_USER = "SET_AUTH_USER";
export const LOGOUT = "LOGOUT";

export function setAuthUser(userId) {
  return {
    type: SET_AUTH_USER,
    userId
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
