import { api } from './index'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: () => ({
        url: "/products", 
      }),
      providesTags:["Product"]
    }),
    getSearchProducts: build.query({
      query: (params)=> {
        return {
          url: `/products/search`,
          method:"GET",
          params
        }
      }
    }),
    providesTags:["Product"]
  }),
})

export const {
  useGetProductsQuery,
  useGetSearchProductsQuery
} = productApi