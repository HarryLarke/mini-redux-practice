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
    }),
        addItem: builder.mutation({
            query: (item) => ({
                url: '/items',
                method: 'POST',
                body: item
            }),
            invalidatesTags: ['Items']
        }),
        deleteItem: builder.mutation({
            query: ({ id }) => ({
                url: `/items/${id}`,
                method: 'DELETE',
                body: id
            }), 
            invalidatesTags: ['Items']
        }),
        updateItem: builder.mutation({
            query: (item) => ({
                url: `/items/${item.id}`,
                method: 'PATCH',
                body: item
            }),
            invalidatesTags: ['Items']
        }) 
        })


})

export const { 
    useGetItemsQuery,
    useAddItemMutation,
    useDeleteItemMutation,
    useUpdateItemMutation
} = apiSlice

