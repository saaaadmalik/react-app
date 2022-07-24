import { products } from '../products';    //use curly braces for named imports
import Card from '../components/Card';    //jsx import
import React, { useState } from 'react';   // buitin functions like useState, used to update UI

const Home = () => {
    const [product, setProduct]=useState(products)
  return (
    <div className='row'>
        {product.map(p => <Card prod={p}/>)}
      </div>
  )
}

export default Home