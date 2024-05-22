import React from 'react'
import Products from '../../components/products/Products'
import { useGetProductsQuery } from '../../context/api/productApi'
import { useSearchParams } from 'react-router-dom'



const Home = () => {
  const {data, loading} = useGetProductsQuery()

  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("q") || "";

  return (
    <div>
      <button onClick={()=> setSearchParams({q:"phone"})}>Phones</button>
      <button onClick={()=> setSearchParams({q:"phone"})}>Laptops</button>
      <Products loading={loading} data={data?.products}/>
    </div>
  )
}

export default Home