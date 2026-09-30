import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    { id: 1, title: 'Understanding Redux Architecture' },
    { id: 2, title: 'JWT Authentication Workflow' },
  ],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { deletePost } = postSlice.actions;
export default postSlice.reducer;