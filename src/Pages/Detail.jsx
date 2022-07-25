import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../products'
import p1 from "../assets/img/p1.png"

const Detail = () => {
    const {id}=useParams()   //destructuring id from the object
    const product = products.find(p=> p.id === Number(id))  // find is also the iterator, in its argument it uses callback function with a condition if condition true matlab k array may jis marzi object ki id k sath agar id match hogai to yeh pura object return kr de ga.
    //  === equal is used to match both the value and the parameter.
  return (
    <div className='row' id='Detail'>
        <div className="col-md-4">
        <img src={p1} class="card-img-top" alt="..." />
        </div>
        <div className="col-md-8">
            <h1> {product.title}</h1>
            <h4> {product.description}</h4>
            <h5> In Stock {product.stock}</h5>
            <a href="#" class="btn btn-danger">Get Discount </a>

        </div>

    </div>
  )
}

export default Detail


//This useParams is a object having all the parameters in our URL