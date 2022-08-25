import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/controller/postsSlice"
import usersReducer  from "../features/users/controller/usersSlice";

export const store = configureStore({
    reducer: {
       posts: postsReducer,
       users: usersReducer,
    }
})