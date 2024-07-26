import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001' }),
    tagTypes:["product"],
    endpoints: (builder) => ({ 
        getProducts: builder.query({
            query: () => ({
                url: `api/v1/product`,
                method: 'GET',
            }),
            providesTags: ['product'],
        }),
        
    }),
    })


    export const {useGetProductsQuery} = baseApi;