import React from "react";

export const PostContext = React.createContext();

const initialState = {
  posts: [],
};

export const UPDATE_POST = "UPDATE_POST";
export const INSERT_POST = "INSERT_POST";

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_POST:
      return {
        posts: [...state.posts, ...action.payload],
      };
    case INSERT_POST:
      return {
        posts: [...action.payload],
      };
    default:
      return state;
  }
};

export const PostProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export const updatePosts = (posts) => ({
  payload: posts,
  type: UPDATE_POST,
});

export const insertPosts = (posts) => ({
  payload: posts,
  type: INSERT_POST,
});
