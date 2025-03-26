import { configureStore } from '@reduxjs/toolkit'

=import show_sidebar from '../reducers/show_sidebar'
import { apiSlice } from '../../api/apiSlice'


export const store = configureStore({
  reducer: {
    show_sidebar,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})
