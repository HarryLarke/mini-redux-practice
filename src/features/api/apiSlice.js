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
            query: (task) => ({
                url: '/items',
                method: 'POST',
                body: {
                    ...task,
                    date: new Date().toISOString()
                }
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
            query: ({id, checked}) => ({
                url: `/items/${id}`,
                method: 'PATCH',
                body: {checked}
            }),
            async onQueryStarted({id, checked}, { dispatch, queryFufilled}) {
                const patchResult = dispatch(
                    apiSlice.util.updateQueryData('getItems', undefined, draft => {
                        const item = draft.find(item => item.id === id)
                        if(item) item.checked = checked  
                    })
                ) 
                try {
                    await queryFufilled
                } catch {patchResult.undo()}
            }
        }) 
        })

})

export const { 
    useGetItemsQuery,
    useAddItemMutation,
    useDeleteItemMutation,
    useUpdateItemMutation
} = apiSlice

