
import { apiSlice } from "../api/apiSlice"


export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints : builder => ({
        getItems: builder.query({
            query: () => '/items',
            transformResponse: res => res.sort((a, b) => b.id - a.id),
            providesTags: ['Items']
        }) 
    })
})

export const { 
    useGetItemsQuery
} = extendedApiSlice


