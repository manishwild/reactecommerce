import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const { filtered_products: products, all_products } = useFilterContext()
  return <GridView products={products}>Product List</GridView>
}

export default ProductList
