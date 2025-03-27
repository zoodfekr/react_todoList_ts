import { configureStore } from '@reduxjs/toolkit'

import { apiSlice } from '../../api/apiSlice'
import show_sidebar from '../reducers/show_sidebar'
import theme_slice from '../reducers/theme'


export const store = configureStore({
  reducer: {
    show_sidebar,
    theme_slice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})


// 🔹 تعریف نوع `RootState`
export type RootState = ReturnType<typeof store.getState>;
// 🔹 تعریف نوع `AppDispatch`
export type AppDispatch = typeof store.dispatch;