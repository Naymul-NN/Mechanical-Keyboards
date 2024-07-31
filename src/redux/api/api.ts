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
        getAllProducts: builder.query({
            query: () => ({
                url: `api/v1/product/getAll`,
                method: 'GET',
            }),
            providesTags: ['product'],
        }),


        getSingleProduct: builder.query({
            query: (id) => ({
                url: `api/v1/product/${id}`,
                method: 'GET',
            }),
            providesTags: ['product'],
        }),

        addCart: builder.mutation({
            query: (data) => ({
                url: "api/v1/productCart/create-productCart",
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["product"],
        }),
        
    }),
    })


    export const {useGetProductsQuery,useGetSingleProductQuery,useGetAllProductsQuery,useAddCartMutation} = baseApi;