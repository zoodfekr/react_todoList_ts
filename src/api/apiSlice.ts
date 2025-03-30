import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  tagTypes: ['CATEGORIES'],
  endpoints: () => ({})
})




// export const { useGet_usersQuery } = apiSlice

// دریافت توکن
// get_Token: builder.mutation({
//   query: props => {
//     const url = `api/token/`
//     const method = 'POST'
//     return {
//       url,
//       method,
//       body: {}
//     }
//   },
//   providesTags: ['TOKEN']
// }),

// getLang: builder.query({
//   query: props => {
//     const url = 'api/lang/'
//     const method = 'GET'
//     return {
//       url,
//       method,
//       headers: {
//         authorization: `Bearer ${props.token}`
//       }
//     }
//   },
//   providesTags: ['LANG']
// }),