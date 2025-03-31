import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3500'}),
    tagTypes: ['Items'],
    endpoints: (builder) => ({ 
        getItems: builder.query({
        query: () => '/items',
        transformResponse: res => res.sort((a, b) => b.id - a.id),
        providesTags: ['Items']
    })})
})

export const { 
    useGetItemsQuery
} = apiSlice

