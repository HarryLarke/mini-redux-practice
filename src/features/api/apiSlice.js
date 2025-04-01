import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { sub } from "date-fns"



export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3500'}),
    tagTypes: ['Items'],
    endpoints: (builder) => ({ 
        getItems: builder.query({
        query: () => '/items',
        transformResponse: responseData => {
            let min = 0
            const loadedItems = responseData.map(item => {
                if(!item?.date) item.date = sub(new Date(), {minutes: min++}).toISOString()
                    return item
            })
            return loadedItems.sort((a, b) => new Date(b.date) - new Date(a.date))
        },   
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
                body:  { id }
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

