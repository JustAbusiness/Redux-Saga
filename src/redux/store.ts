import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counter.slide'
import userReducer from './user/user.slide'
import appReducer from './app/app.slide'

const store = configureStore({
  reducer: {
        count: counterReducer,
        user: userReducer,
        app: appReducer
  }
})

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch