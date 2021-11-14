import React from "react";

export const UserContext = React.createContext();

const initialState = {
  user: "Abhishek",
};

export const UPDATE_USER = "UPDATE_USER";

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const updateUser = (username) => ({
  type: UPDATE_USER,
  payload: username,
});
